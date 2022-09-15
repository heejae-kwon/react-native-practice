import { useState } from 'react';
import { IMAGE_URLS } from './data/sample-image-urls';
import { inferenceSqueezenet } from './utils/predict';
import React from 'react';
import {
    ScrollView,
    Text,
    Button,
    View,
    Image
} from 'react-native';
import { Divider } from 'react-native-paper';
import RNFS from 'react-native-fs'


const ImageCanvas = () => {
    // get a list of files and directories in the main bundle

    RNFS.existsAssets('model/squeezenet1.1.ort').then((result) => console.log(result));
    RNFS.copyFileAssets('model/squeezenet1.1.ort', RNFS.DocumentDirectoryPath + '/squeezenet1.1.ort').then((re) => {
        RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
            .then((result) => {
                console.log('GOT RESULT', result);

                // stat the first file
                return Promise.all([RNFS.stat(result[0].path), result[0].path]);
            })
            .then((statResult) => {
                if (statResult[0].isFile()) {
                    // if we have a file, read it
                    return RNFS.readFile(statResult[0].path);
                }

                return 'no file';
            })
            .then((contents) => {
                // log the file contents
                //console.log(contents);
            })
            .catch((err) => {
                console.log(err.message, err.code);
            });
    }).catch((error) => console.log(`error: ${error}`));

    // get a list of files and directories in the main bundle

    //const canvasRef = useRef<HTMLCanvasElement>(null);
    //const image: HTMLImageElement;
    const [topResultLabel, setLabel] = useState("");
    const [topResultConfidence, setConfidence] = useState("");
    const [inferenceTime, setInferenceTime] = useState("");

    // Load the image from the IMAGE_URLS array
    const getImage = () => {
        const sampleImageUrls: Array<{ text: string; value: string }> = IMAGE_URLS;
        const random = Math.floor(Math.random() * (9 - 0 + 1) + 0);
        return sampleImageUrls[random];
    }

    let imageSrc = ''
    const sampleImage = getImage();
    //   image.src = sampleImage.value;
    imageSrc = sampleImage.value
    console.log(imageSrc)


    // Draw image and other  UI elements then run inference
    const displayImageAndRunInference = () => {
        // Get the image
        //   image = new Image();
        // Clear out previous values.
        const ii = Image.resolveAssetSource(require('./utils/test.jpg')).uri
        console.log(ii)
        setLabel(`Inferencing...`);
        setConfidence(ii);
        setInferenceTime("");

        // Draw the image on the canvas
        //    const canvas = canvasRef.current;
        //   const ctx = canvas!.getContext('2d');
        //  image.onload = () => {
        //      ctx!.drawImage(image, 0, 0, props.width, props.height);
        //  }

        // Run the inference
        submitInference();
    };

    const submitInference = async () => {

        // Get the image data from the canvas and submit inference.
        console.log('hello')
        const [inferenceResult, inferenceTime] = await inferenceSqueezenet(imageSrc);//image.src);

        // Get the highest confidence.
        const topResult = inferenceResult[0];

        // Update the label and confidence
        setLabel(topResult.name.toUpperCase());
        setConfidence(topResult.probability);
        setInferenceTime(`Inference speed: ${inferenceTime} seconds`);

    };

    return (
        <ScrollView>
            <View>
                <Button
                    onPress={displayImageAndRunInference}
                    title='버튼' />
            </View>
            <Divider />
            {//<canvas ref={canvasRef} width={props.width} height={props.height} />
            }
            <Image
                source={{ uri: imageSrc }}
                style={{ width: 200, height: 200 }}
            />
            <Text>{topResultLabel} {topResultConfidence}</Text>
            <Text>{inferenceTime}</Text>
        </ScrollView>
    )

};

export default ImageCanvas;
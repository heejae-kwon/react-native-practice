import { useEffect, useState } from 'react';
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
import Canvas, { Image as CanvasImage } from 'react-native-canvas';
import { prepareAssets, readAsset } from './utils/assetsHelper';
import { encode, decode } from 'base64-arraybuffer'


function ImageCanvas() {
    // get a list of files and directories in the main bundle

    //const canvasRef = useRef<HTMLCanvasElement>(null);
    //const image: HTMLImageElement;
    const [topResultLabel, setLabel] = useState("");
    const [topResultConfidence, setConfidence] = useState("");
    const [inferenceTime, setInferenceTime] = useState("");
    const [inferenceTrigger, setinferenceTrigger] = useState(false);
    const [imageSrc, setImageSrc] = useState("")
    let imageData: Uint8ClampedArray = new Uint8ClampedArray()



    // get a list of files and directories in the main bundle

    useEffect(() => {
        prepareAssets()
        const getImageBase64 = async () => {
            const imageBase64 = await readAsset('model/running_1.jpg', 'base64')
            imageData = new Uint8ClampedArray(decode(imageBase64))
            setImageSrc('data:image/jpeg;base64,' + imageBase64) //Image.resolveAssetSource(require('../assets/running_1.jpg')).uri
            console.log(imageData)
        }
        getImageBase64()
    }, [imageSrc]);

    // Load the image from the IMAGE_URLS array
    /*    const getImage = () => {
            const sampleImageUrls: Array<{ text: string; value: string }> = IMAGE_URLS;
            const random = Math.floor(Math.random() * (9 - 0 + 1) + 0);
            return sampleImageUrls[random];
        }*/

    //   image.src = sampleImage.value;


    // Draw image and other  UI elements then run inference
    const displayImageAndRunInference = () => {
        //setImageSrc(getImage().value)
        // Get the image
        //   image = new Image();
        // Clear out previous values.
        submitInference();
        setLabel(`Inferencing...`);
        setConfidence('');
        setInferenceTime("");

        // Draw the image on the canvas
        //    const canvas = canvasRef.current;
        //   const ctx = canvas!.getContext('2d');
        //  image.onload = () => {
        //      ctx!.drawImage(image, 0, 0, props.width, props.height);
        //  }

        // Run the inference
    };

    const submitInference = async () => {

        // Get the image data from the canvas and submit inference.
        const [inferenceResult, inferenceTime] = await inferenceSqueezenet(null, Array.from(imageData));//image.src);

        // Get the highest confidence.
        //const topResult = inferenceResult[0];
        console.log((inferenceResult))

        // Update the label and confidence
        // setLabel(topResult.name.toUpperCase());
        // setConfidence(topResult.probability);
        setInferenceTime(`Inference speed: ${inferenceTime} seconds`);
        setinferenceTrigger(false)
    };
    const handleImageRect = async (canvas: Canvas) => {
        if (!(canvas instanceof Canvas)) {
            return;
        }
        const image = new CanvasImage(canvas);
        canvas.width = 200;
        canvas.height = 112;

        const context = canvas.getContext('2d');

        image.crossOrigin = "Anonymous"



        image.addEventListener('load', () => {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            context.getImageData(0, 0, canvas.width, canvas.height).then((imgdd) => {
                const ta = Object.entries(imgdd.data);
                //console.log(ta)
                // imageData = new Uint8ClampedArray(ta)
            })
        });
    }
    return (
        <ScrollView>
            <View>
                <Button
                    onPress={displayImageAndRunInference}
                    title='버튼' />
            </View>
            <Divider />
            {
                imageSrc && <Image
                    source={{ uri: imageSrc }}
                    style={{ width: 300, height: 300 }}
                />
            }
            {/*<Canvas ref={handleImageRect} /*/}
            <Text>{topResultLabel} {topResultConfidence}</Text>
            <Text>{inferenceTime}</Text>
        </ScrollView>
    )

};

export default ImageCanvas
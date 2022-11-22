//import * as Jimp from 'jimp';
import { Tensor } from 'onnxruntime-react-native';

export async function getImageTensorFromPath(path: string, dims: number[] = [1, 3, 224, 224]): Promise<Tensor> {
    // 1. load the image  
    const image = await loadImagefromPath(path, dims[2], dims[3]);
    // 2. convert to tensor
    const imageTensor = imageDataToTensor(image, dims);
    // 3. return the tensor
    return imageTensor;

}

export function getImageTensorFromImageData(image: number[], dims: number[] = [1, 3, 224, 224]): Tensor {
    // 1. load the image  
    // 2. convert to tensor
    const imageTensor = imageDataToTensor(image, dims);
    // 3. return the tensor
    return imageTensor;

}

async function loadImagefromPath(path: string, width: number = 224, height: number = 224): Promise<Array<number>> {
    // Use Jimp to load the image and resize it.
    /*const imageDataOrigin = await axios.get(path, {
        responseType: 'arraybuffer',
        responseEncoding: 'binary'
    })
   /* console.log('뭔디')
    const imageData = await RNFetchBlob.fetch('GET', path)
    console.log('뭔디1 ' + path)

    let result = await ImageResizer.createResizedImage(
        "data:image/jpeg;base64, " + imageData.base64(),
        width,
        height,
        'JPEG',
        100,
        0,
        RNFetchBlob.fs.dirs.PictureDir,
        true,
        { mode: 'stretch' }
    );
    const ss = await RNFetchBlob.fs.readFile(result.uri, 'base64')
    console.log("uri: " + result.uri)



      = await Jimp.default.read(path).then((imageBuffer: Jimp) => {
         return imageBuffer.resize(width, height);
     });

    // console.log(ss)*/
    return Array.from(new Uint8ClampedArray());
}

function imageDataToTensor(image: number[], dims: number[]): Tensor {
    // 1. Get buffer data from image and create R, G, and B arrays.
    console.log(`image: ${image.length}`)
    const imageBufferData = image//.bitmap.data;
    const [redArray, greenArray, blueArray] = new Array(new Array<number>(), new Array<number>(), new Array<number>());

    // 2. Loop through the image buffer and extract the R, G, and B channels
    for (let i = 0; i < imageBufferData.length; i += 4) {
        redArray.push(imageBufferData[i]);
        greenArray.push(imageBufferData[i + 1]);
        blueArray.push(imageBufferData[i + 2]);
        // skip data[i + 3] to filter out the alpha channel
    }

    // 3. Concatenate RGB to transpose [224, 224, 3] -> [3, 224, 224] to a number array
    const transposedData = redArray.concat(greenArray).concat(blueArray);

    // 4. convert to float32
    let i, l = transposedData.length; // length, we need this for the loop
    // create the Float32Array size 3 * 224 * 224 for these dimensions output
    const float32Data = new Float32Array(dims[1] * dims[2] * dims[3]);
    for (i = 0; i < l; i++) {
        float32Data[i] = transposedData[i] / 255.0; // convert to float
    }
    // 5. create the tensor object from onnxruntime-web.
    const inputTensor = new Tensor("float32", float32Data, dims);
    //console.log(inputTensor)
    return inputTensor;
}
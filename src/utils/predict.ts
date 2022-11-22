
// Language: typescript
// Path: react-next\utils\predict.ts
import { Tensor } from 'onnxruntime-react-native';
import { getImageTensorFromImageData, getImageTensorFromPath } from './imageHelper';
import { runSqueezenetModel } from './modelHelper';

export async function inferenceSqueezenet(path: string | null, image: number[] | null): Promise<[any, number]> {
    // 1. Convert image to tensor
    console.log("inference " + path)
    let imageTensor: any = null
    if (path) {
        imageTensor = await getImageTensorFromPath(path);
    }
    if (image) {
        //console.log(image)
        imageTensor = getImageTensorFromImageData(image, [1, 3, 112, 200])
    }
    //    console.log(imageTensor)

    // 2. Run model
    const [predictions, inferenceTime] = await runSqueezenetModel(imageTensor);
    // 3. Return predictions and the amount of time it took to inference.
    return [predictions, inferenceTime];
}


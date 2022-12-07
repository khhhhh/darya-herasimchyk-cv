export interface pictureList {
    folderName: string;
    elements: picture[];
}

export interface picture {
    name: string;
    width: number;
    height: number;
}
export function createLink(pic: picture, folderName: string, fullResolution: boolean = false): string {
    let url = "";
        url = `https://ik.imagekit.io/me9sfvskr/${folderName}/${pic.name}-min.jpg?ik-sdk-version=javascript-1.4.3`
    if (!fullResolution)
        url += `&tr=w-${pic.width}%2Ch-${pic.height}%2Cfo-auto`;
    return url;
}

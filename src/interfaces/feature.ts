export interface IProject {
    project: string
    url: string
    repo: string
    descriptionTitle: string
    description: string
    imageOptions: ImageOption[]
    images: Image[]
    stack: Stack[]
}

export interface ImageOption {
    key: string
    value: string
}

export interface Image {
    key: string
    hover: string
    h: string
    w: string
    url: string
}

export interface Stack {
    key: string
    name: string
    type?: string
}

declare module '*.vue' {
    import { DefineComponent } from 'vue'
    interface Vue {
        $https: any;
        $urls: any;
        $Message: any;
        $Modal: any;
    }
    const component: DefineComponent<{}, {}, Vue, any>
    export default component
}

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
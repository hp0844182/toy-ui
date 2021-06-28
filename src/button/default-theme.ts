export interface ButtonDefaultClasses {
    base: string;
    block: string;
    disabled: string;
    size: {
        large: string;
        medium: string;
        default: string;
        small: string;
    };
    layout:{
      primary:string
      link:string
      ghost:string
      dashed:string
      default:string
    }
}

export const defaultButtonClasses: ButtonDefaultClasses = {
    base: 'align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none',
    block: 'w-full',
    disabled:'',
    size: {
        large: 'p-4 rounded-lg',
        medium: 'p-3 rounded-lg',
        default: 'px-4 py-2 rounded-lg text-sm',
        small: 'rounded-md text-xs px-3 py-1 text-sm',
    },
    layout:{
      primary:'bg-primary text-white',
      link:'',
      ghost:'',
      dashed:'',
      default:''
    }
};

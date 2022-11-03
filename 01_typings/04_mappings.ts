namespace Options_Verbose { // modern ES lets us use the keyword 'namespace'
    interface Options {
        material: string
        backlight:boolean
    }
    // read-only version
    interface ManualReadOnlyOptions {
        readonly material:string
        readonly backlight:boolean
    }
    // optional version
    interface ManualOptionalOptions {
        material?:string
        backlight?:boolean
    }
    // nullable version
    interface ManualNullableOptions {
        material:string | null
        backlight:boolean | null
    }
}

namespace Options_Terse {
    // original version
    interface Options {
        material:string
        backlight:boolean
        other:number
    }
    // we can use type mapping to declare new types from existing types
    //                  <T> refers to whatever is the type of the existing data (T by convention)
    type ReadOnlyOptions<T> = { readonly [k in keyof T]: T[k] }
    type OptionalOptions<T> = { [k in keyof T]?: T[k]} // T[k]=='material'? T[k]: T[k] }
    type NullableOptions<T> = { [k in keyof T]: T[k] | null }
    
    // we can exclude members (see https://www.typescriptlang.org/docs/handbook/2/mapped-types.html )
    type OptSomeOptions<T>  = { [k in keyof T as Exclude<k, "material">]?: T[k] }

    // make our new types by mapping
    type ReadOnly = ReadOnlyOptions<Options>
    type Optional = OptionalOptions<Options>
    type Nullable = NullableOptions<Options>
    

    // make use of our new types
    const brick:ReadOnly = {
        backlight:false, 
        material:'brick',
        other:99
    }
    // brick.material = 'no can do'
    const gauze:Nullable = {
        material: null,
        backlight:true,
        other:42

    }
    const silk:Optional = {
        backlight : true
    }

}
{
    // the dictionary type
    // a very basic interface
    interface Celaphod {
        hasInk:boolean
        arms:number
        tentacles:number
    }
    // then a dictionary
    interface CelaphopodDict { // or type =
        [species:string] : Celaphod // name:value makes this a dictionary
    }

    // a simple enumeration
    enum en {vulgaris='Vulgaris', loligo='Loligo'}

    // exercise the code
    const dict:CelaphopodDict = {}
    dict[en.vulgaris] = {hasInk:true, arms:8, tentacles:0}
    dict[en.loligo]   = {hasInk:true, arms:8, tentacles:2}
}
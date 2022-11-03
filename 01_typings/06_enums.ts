// use enum as bit flags
{
    const enum CategoryFlags {
        None    = 0,
        Music   = 1,
        News    = 2,
        Drama   = 4,
        Comedy  = 8,
        Fiction = 16
    }

    // combinations will always be unique
    const MusicalComedy = CategoryFlags.Music | CategoryFlags.Comedy

    const hasMusic   = (MusicalComedy & CategoryFlags.Music)
    const hasComedy  = (MusicalComedy & CategoryFlags.Comedy)
    const hasDrama   = (MusicalComedy & CategoryFlags.Drama)

    console.log(hasMusic, hasComedy, hasDrama)

}
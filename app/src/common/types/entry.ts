enum AssetSize {
    SMALL = '@1x',
    MEDIUM = '@2x',
    LARGE = '@3x'
};

enum AssetCategoriesKeys {
    PAINTING,
    PHOTO,
    DESIGN
}

type SizedAsset = {
    size: AssetSize;
    url: string;
}
  
type AssetCategory = keyof typeof AssetCategoriesKeys;

export type Entry = {
    _id: string;
    images: [SizedAsset]; 
    title: string;
    location: string;
    date: string;
    categories: [AssetCategory]
}
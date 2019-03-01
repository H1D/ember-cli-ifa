export default function getAssetMapData() {
  const assetMapString = document.querySelector("meta[name='ember-cli-ifa:assetMap']").content;
  if (!assetMapString) {
    return;
  }

  try{
    // TODO compare with `MetaPlaceholder` constant
    return JSON.parse(decodeURIComponent(assetMapString));
  } catch(error) {
    return;
  }
}

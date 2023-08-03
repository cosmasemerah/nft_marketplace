// Trending Collections
export const trendingImgData = {
  tre10: (await import('@assets/tre10.svg')).default,
  tre11: (await import('@assets/tre11.svg')).default,
  tre12: (await import('@assets/tre12.svg')).default,
  tre13: (await import('@assets/tre13.svg')).default,
  tre20: (await import('@assets/tre20.svg')).default,
  tre21: (await import('@assets/tre21.svg')).default,
  tre22: (await import('@assets/tre22.svg')).default,
  tre23: (await import('@assets/tre23.svg')).default,
  tre30: (await import('@assets/tre30.svg')).default,
  tre31: (await import('@assets/tre31.svg')).default,
  tre32: (await import('@assets/tre32.svg')).default,
  tre33: (await import('@assets/tre33.svg')).default,
};

//Top Creators
export const topCreatorsImgData = {
  cr1: (await import('@assets/cr01.svg')).default,
  cr2: (await import('@assets/cr02.svg')).default,
  cr3: (await import('@assets/cr03.svg')).default,
  cr4: (await import('@assets/cr04.svg')).default,
  cr5: (await import('@assets/cr05.svg')).default,
  cr6: (await import('@assets/cr06.svg')).default,
  cr7: (await import('@assets/cr07.svg')).default,
  cr8: (await import('@assets/cr08.svg')).default,
  cr9: (await import('@assets/cr09.svg')).default,
  cr10: (await import('@assets/cr10.svg')).default,
  cr11: (await import('@assets/cr11.svg')).default,
  cr12: (await import('@assets/cr12.svg')).default,
};

//Top 10 Creators Data
export const top10Creators = Object.fromEntries(
  Object.entries(topCreatorsImgData).slice(0, 12)
);

//Discover more data
export const discoverMoreNftImgData = {
  dis1: (await import('@assets/dis1.svg')).default,
  disA1: (await import('@assets/disA1.svg')).default,
  dis2: (await import('@assets/dis2.svg')).default,
  disA2: (await import('@assets/disA2.svg')).default,
  dis3: (await import('@assets/dis3.svg')).default,
  disA3: (await import('@assets/disA3.svg')).default,
  dis4: (await import('@assets/dis4.svg')).default,
  disA4: (await import('@assets/disA4.svg')).default,
  dis5: (await import('@assets/dis5.svg')).default,
  disA5: (await import('@assets/disA4.svg')).default,
  dis6: (await import('@assets/dis6.svg')).default,
  disA6: (await import('@assets/disA4.svg')).default,
  dis7: (await import('@assets/dis7.svg')).default,
  disA7: (await import('@assets/disA4.svg')).default,
  dis8: (await import('@assets/dis8.svg')).default,
  disA8: (await import('@assets/disA4.svg')).default,
  dis9: (await import('@assets/dis9.svg')).default,
  disA9: (await import('@assets/disA4.svg')).default,
};

//Discover new trending data
export const topDiscoverNftImgData = Object.fromEntries(
  Object.entries(discoverMoreNftImgData).slice(0, 6)
);

//Highlight NFT
export const highlightImgData = {
  hiArtist: (await import('@assets/disA4.svg')).default,
  hiBg: await import('@assets/highlightBg.svg'),
};

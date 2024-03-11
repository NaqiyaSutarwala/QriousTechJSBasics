function longestConsec(strarr, k) {
  const newArray = [...strarr];
  const data = [];
  let newWord;
  newArray.map((item, index) => {
    const word = item;
    for (let i = 0; i < k; i++) {
      if (newArray[index + i] === undefined) return;
      item = item + newArray[index + i];
    }

    const itemArr = item.split("");
    itemArr.splice(0, word.length);
    const wordHere = itemArr.join("");
    data.push(wordHere);
  });

  let words;
  let length = 0;

  data.forEach((item) => {
    if (item.length > length) {
      length = item.length;
      words = item;
    }
  });

  if (data.length === 0) return "";
  if (words === undefined) return "";
  return words;
}

console.log(
  longestConsec(
    [
      "kbetxkvp",
      "vvoodh",
      "tsbvbm",
      "zxnwroxnshzlrvr",
      "xrmibwp",
      "qvpctdjzfzcl",
      "tlgfdvmrlnevrcg",
      "awpwcgfdayazw",
      "wxaxetneonuav",
      "zctvkiyldd",
      "iwcykyduuzp",
      "bcdjjnyx",
      "unvtkddsxeyrdyp",
      "hutewqeqhxe",
      "iacwudwdbf",
      "ldvywjrmdj",
      "xbcigtnne",
      "yksotxqb",
      "gyygeybf",
      "sfgqbglw",
      "aqyojkout",
      "ikjtqm",
      "cxibvuc",
      "dusmeogdu",
      "hgogtwglprv",
      "jdeawxfqysne",
      "lufheqhl",
      "jdpdgxifx",
      "ixubulqcpjx",
      "evumdbcz",
      "ycyhmneyjafs",
      "iwdzhnwswnqu",
      "bgvbuqeanqk",
      "dizioomiia",
      "ompgqcdewbxrzt",
      "ztazkoxvvqnfgf",
      "ogpobekvyupnzz",
      "ourjvvwistcsdlguy",
      "gzvhopx",
      "xbhythoxswztodqv",
      "fsxvyqxqex",
      "lxqmzdrbaszafv",
      "pjyirujlkbcpqjnmm",
      "euavygihtbsptam",
      "maazorm",
      "axpnyjok",
      "xozruejcysubur",
      "icnxcsimeobzgy",
      "cxozqqtqlmb",
      "hibzczva",
      "elzfekzpoyf",
      "svmzbvg",
      "gfgcmtvqfq",
      "wusmvxfrwlefvn",
      "vgymqguykx",
      "tgwswbo",
      "npqyydshbbdhsqshv",
      "odztuwztwsvvwzalj",
      "qhffqebxtwicax",
      "rmrcxhfeloa",
      "uqbxazq",
      "kdqvjjkrcla",
      "tmwjvqrkosdj",
      "mgqxcpxawy",
      "vzkgomleqcw",
      "ckdvcgjwutzvba",
      "oiqohgrawpeeg",
      "rcnuzy",
      "zjlobrclxwjnt",
      "kxfnpubnzzb",
      "fpemtg",
      "xhncofuqwkvt",
      "mnadgnxxldry",
      "biufagnior",
      "tvmhhdtzwiycnjwcp",
      "btarcu",
      "ppkbxyibe",
      "ppzdxklfde",
      "isnbohtaq",
      "yzknhx",
      "kqwliimr",
      "ycvijpaf",
      "ezeflxoswv",
      "nzlbxkhha",
      "vjqbcieoiqyr",
      "udqdeteni",
      "orniec",
      "ujynmk",
      "whipjvnxcimu",
      "mymgxipzwlrjtb",
      "gqecafjhmvs",
      "uvcdbqdiizs",
      "wbcturwuzwnb",
      "rnduxrbgbmtn",
      "fadpglicefyoxxi",
      "kqcqwcvvxr",
      "fipugbmgzkzas",
      "dytzhx",
      "ybtrstnv",
      "sbhnzgwsiwesmpe",
      "sxminfbwuogfzeq",
      "ppxcohwq",
      "kzuxrthd",
      "dvffubxkddh",
      "rwjveeeejbq",
      "gnsasipnuty",
      "saqxdpwofnawm",
      "qglagsxw",
      "glfkzipikfavno",
      "trohkqmbpbc",
      "yntxfy",
      "abjaldaod",
    ],
    0
  )
);

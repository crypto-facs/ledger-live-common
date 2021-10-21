import type { CurrenciesData } from "../../../types";
import type { Transaction } from "../types";
const dataset: CurrenciesData<Transaction> = {
  scanAccounts: [
    {
      name: "viacoin seed 1",
      apdus: `
      => b001000000
      <= 0107566961636f696e05312e362e339000
      => e04000010d03800000318000000e80000000
      <= 410480b2ebd31e9aecc021c6c2e9d924723dc807cd6b7c14fbedf9a1c866d16535df797f6140170f8e09b03b285d1cf1dd5e859063c348913453beaefce77c73cdd622454d6a617a6f35353359526b63323259693537694258335677776b4753334635484645883971a65067615c547f9837a13ef8d0641f8887393124c9c9c7ab0432fd649000
      => e016000000
      <= 004700210107566961636f696e035649419000
      => b001000000
      <= 0107566961636f696e05312e362e339000
      => e04000011505800000318000000e800000000000000000000000
      <= 410455fcd70f1980b7e0362d6433bba62bf5cd82a2c48a87952ce128ea2baad910a9028cbda22a22e3b3125db3b0c3a80da1132aba4c58a0db671bf690de109dd1da22454c384339564c6177487a6a61434d6770634c656d7150654558756e48356a4e756faaca51c951a4cdbb57fd8670d4bebf9239a9a17ddc975c4766aa8edfefd7681e9000
      => e016000000
      <= 004700210107566961636f696e035649419000
      => b001000000
      <= 0107566961636f696e05312e362e339000
      => e04000000902800000318000000e
      <= 4104a60587b5e2b0efd506c88fca8422b81c4e9a7bedbe9b772e1fff978c62571e882bcec45a945e8381755d2e7089023d085ead8546d02348654cefb73448d9dec7225679434e436e4b6b6b4831374d3734574a77355770526f4535635a6a3967507a5239da03935b26f245dafeb7f7c9669e1ead22689a4d0a137c3e97b787b09fc4e1b29000
      => e04000000d03800000318000000e80000000
      <= 410480b2ebd31e9aecc021c6c2e9d924723dc807cd6b7c14fbedf9a1c866d16535df797f6140170f8e09b03b285d1cf1dd5e859063c348913453beaefce77c73cdd622566853564e4c504d767351366b5159766e6b656177664b36756637345452524b487145883971a65067615c547f9837a13ef8d0641f8887393124c9c9c7ab0432fd649000
      => b001000000
      <= 0107566961636f696e05312e362e339000
      => e04000011505800000318000000e800000010000000000000000
      <= 410493cbe239ca9d9589338624ccc582f23dd7b23163a59649c389ef093e13e3b3ca5b58ddcf8cd475a3ff46b92dda7dae7f692848a25372fda76345b69cb1a1b2872245484141674653444d665934554873526e3667454a7856686e564c504e4e75707734b33f4057e32e63c5089e1be19b4c6063399d45eb32f04a8615b5f4a1aaa01fb99000
      => e016000000
      <= 004700210107566961636f696e035649419000
      => b001000000
      <= 0107566961636f696e05312e362e339000
      => e04000000902800000318000000e
      <= 4104a60587b5e2b0efd506c88fca8422b81c4e9a7bedbe9b772e1fff978c62571e882bcec45a945e8381755d2e7089023d085ead8546d02348654cefb73448d9dec7225679434e436e4b6b6b4831374d3734574a77355770526f4535635a6a3967507a5239da03935b26f245dafeb7f7c9669e1ead22689a4d0a137c3e97b787b09fc4e1b29000
      => e04000000d03800000318000000e80000001
      <= 410474b2aece6cb7528f855c2ee8b1ae2d17accb7f07b57a4d948aeb4c948d9dcd138c4fd9ab7ef92e7246eae4eb9043e984ca3d30beb46b009033ad755976f730cb2256696565363738796d4a4a593657426a64314c4d4642564a69664665596867325555df89fbc5da1c02f6e7c7f6e7a11137e96790986f7935d8174c26ebb6592d36b99000
      => e04000000d038000002c8000000e80000000
      <= 41042ee7221d7491590252b2dab2f9d47b58f6a7ff0ee53ddc17c07e51934fd4055afd3ead3a97047d97992963a7d238da72ac0d0de1ac222c07efd8a3be8ee9e4fe225669456a5466556d70393442385974423268773535344165515735596a42465a505a42fdeaea0b5a5a1c77852c3c4f9bea8a2550198721c7c0bfae236f54668323f69000
      => e016000000
      <= 004700210107566961636f696e035649419000
      => b001000000
      <= 0107566961636f696e05312e362e339000
      => e040000015058000002c8000000e800000000000000000000000
      <= 410435bd8e102060fa62832ab66c56c2f59d2030a38086693feb950a2c23f95d96621b0143ebb64cfaa5ff8f7c385235a92b7e2075d1f324c7a928657dfe2c7b3e192256704a4e77724b434e526162446d677a36674d5361486b6d564e44567647536b744e72c95ef6d3af09b01b7d729f519d87e7a77a990ba0eaa3120c1e123d0233d0779000
      => e016000000
      <= 004700210107566961636f696e035649419000
      => b001000000
      <= 0107566961636f696e05312e362e339000
      => e040000009028000002c8000000e
      <= 41049f7c9c715fd13a47870896346c043bbded5cd7f69b932725fc583bdca42f289648063bf9be14fc466c2957ce8f70a00bd2dbc351e12ef0be74e8194ad48c9c5a2256644c615674677a41655359346431616379326b514a776971374c6d4d6a7446475781807254c0bba79f6cdd4224ded557af32b2e5f16ff4e007dd30b964cd35b6c99000
      => e04000000d038000002c8000000e80000000
      <= 41042ee7221d7491590252b2dab2f9d47b58f6a7ff0ee53ddc17c07e51934fd4055afd3ead3a97047d97992963a7d238da72ac0d0de1ac222c07efd8a3be8ee9e4fe225669456a5466556d70393442385974423268773535344165515735596a42465a505a42fdeaea0b5a5a1c77852c3c4f9bea8a2550198721c7c0bfae236f54668323f69000
      => b001000000
      <= 0107566961636f696e05312e362e339000
      => e040000015058000002c8000000e800000010000000000000000
      <= 4104724fd782cfdfb121dbc807aef81a9f320ef350bd215bc24a1fbb3f515dfba6fcee752384fd48efd2369c5aea5bf9e64b4d1ed54a67d6d9944cd461e83585358822566b43344b73525446617a55744d324735354e4d53545959717248707a326442676492271f2ca7aef829bc8773291957b31029487e76f2020567c5b7e7b6b489f8f49000
      => e016000000
      <= 004700210107566961636f696e035649419000
      => b001000000
      <= 0107566961636f696e05312e362e339000
      => e040000009028000002c8000000e
      <= 41049f7c9c715fd13a47870896346c043bbded5cd7f69b932725fc583bdca42f289648063bf9be14fc466c2957ce8f70a00bd2dbc351e12ef0be74e8194ad48c9c5a2256644c615674677a41655359346431616379326b514a776971374c6d4d6a7446475781807254c0bba79f6cdd4224ded557af32b2e5f16ff4e007dd30b964cd35b6c99000
      => e04000000d038000002c8000000e80000001
      <= 41049f79039b424a9e9ec77cf32f2218199f73381c2d27e21e2139a7adc35a62f1f1bbee2f554acb6288a68222859ac199d17d9d4dafc16e0516abe87bbbafe6de262256614356324445394a6d57675a694233397066395950476b596f6131634a504d33597c891aa264d0ee4eb6b326cd38933d2fb6279f88f919a525305305b510b1925d9000
      `,
    },
  ],
};
export default dataset;

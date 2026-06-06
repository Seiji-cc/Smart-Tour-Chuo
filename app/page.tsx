"use client";

import { useState } from 'react';
import Image from 'next/image';

// データの構造（エリアと巡回スコア付き）
const KOBE_MASTER_DATA = [
  {
    genre: '観光地',
    id: 'sightseeing',
    icon: '⚓',
    spots: [
      { 
        id: 'port', 
        name: 'メリケンパーク', 
        kana: 'めりけんぱーく',
        desc: '神戸ポートタワーがある海辺の公園。', 
        longDesc: '爽やかな海風が心地よい、神戸を代表するウォーターフロントの公園です。園内には、美しくリニューアルした赤く輝く「神戸ポートタワー」や、波をモチーフにしたユニークな形の「神戸海洋博物館」など、港町・神戸を象徴する建造物が立ち並びます。\n近年では、SNS映えする人気スポット「BE KOBE」の巨大なモニュメントが設置され、記念撮影を楽しむ多くの観光客で賑わっています。夜になると一帯が美しくライトアップされ、周囲のホテルや海面がきらめくロマンチックな夜景スポットへと一変。芝生広場ものんびり過ごすのに最適で、神戸の「山と海」の近さを五感で実感できる贅沢な場所です。',
        imagePath: '/port.jpg', 
        mapUrl: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.026859368388!2d135.18563827633202!3d34.67926188439169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008ee4f6825df3%3A0x6bda193f0b2f5b61!2z44Oh44Oq44Kx44Oz44OR44O844Kv!5e0!3m2!1sja!2sjp!4v1710000000000!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        area: '海側エリア',
        orderScore: 40
      },
      { 
        id: 'ijinkan', 
        name: '北野異人館(風見鶏の館)', 
        kana: 'きたのいじんかん(かざみどりのやかた)',
        desc: '異国情緒あふれる洋館街。', 
        longDesc: '六甲山の麓に広がる北野エリアは、明治から大正時代にかけて来日した外国人の邸宅（異人館）が数多く残る、異国情緒あふれる観光名所です。かつては数百棟あったとされる洋館が今も美しく保存・公開されており、石畳の坂道やレンガ造りの街並みを歩くだけで、まるで当時のヨーロッパにタイムスリップしたかのような気分を味わえます。\n中でも、レンガ色の外壁と屋根の上の風見鶏が目印の「風見鶏の館」や、萌黄色の外観が美しい「萌黄の館」は国の重要文化財にも指定されているシンボル的存在です。館内では当時の豪華な家具や装飾を見学できるほか、エリア内にはレトロな洋館を活用したお洒落なカフェやショップも点在。坂道を登りきった場所からは、神戸の街並みと港を一望できる絶景が出迎えてくれます。',
        imagePath: '/ijinkan.jpg', 
        mapUrl: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.4485749216443!2d135.18824107633268!3d34.69382108365452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008ee79d6756b1%3A0xba0067ff258079a0!2z6aKo6KaL6baP44Gu6aSo!5e0!3m2!1sja!2sjp!4v1710000000001!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        area: '山側エリア',
        orderScore: 10
      },
      {
        id: 'nankinmati',
        name: '南京町',
        kana: 'なんきんまち',
        desc: '神戸の中華街で食べ歩きも楽しい。',
        longDesc: '元町駅のすぐ近くに位置する南京町は、横浜・長崎と並ぶ「日本三大中華街」の一つです。東西約270m、南北約110mのコンパクトなエリアに、中華料理店や土産物店など100軒以上の商店がぎっしりと軒を連ねており、一歩足を踏み入れると、色鮮やかな漢字の看板や赤い提灯、そして美味しそうな香りに包まれます。\n南京町の醍醐味といえば、なんといっても「食べ歩き」です。店頭の屋台には、ジューシーな肉汁が溢れる名物の豚まんをはじめ、熱々の小籠包、北京ダック、甘いゴマ団子などがずらりと並び、お腹を満たしながらお祭りのような活気を楽しめます。街の中心にある「南京町広場」のあずまやは人気のフォトスポット。異国情緒と下町の賑やかさが心地よく融合した、神戸観光に欠かせないエネルギッシュなスポットです。',
        imagePath: '/nankinmati.jpg',
        mapUrl: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.814343133604!2d135.18556557633215!3d34.68459468413988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008ee43890f557%3A0x334418fb3698d28e!2z5Y2X5Lqs55S6!5e0!3m2!1sja!2sjp!4v1710000000002!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        area: '元町エリア',
        orderScore: 30
      },
      {
        id: 'ikutajinja',
        name: '生田神社',
        kana: 'いくたじんじゃ',
        desc: '神戸の中心にある歴史ある神社。',
        longDesc: '三宮の繁華街からすぐの場所にありながら、一歩境内に足を踏み入れると厳かな空気が流れる、神戸屈指のパワースポ―トです。西暦201年に神功皇后によって創建されたと伝えられる非常に由緒正しい神社で、かつてこの神社に仕える家（神戸＝かんべ）が多数あったことが、現在の「神戸（こうべ）」という地名の由来になりました。\n御祭神に「稚日女尊（わかひるめのみこと）」を祀り、機織りの神様であることから「糸を紡ぐ＝人と人の縁を結ぶ」として、古くから恋愛成就や良縁結びの神様として全国から多くの参拝客が訪れます。\n境内の奥に広がる「生田の森」は、かつて源平合戦の舞台にもなった歴史ある鎮守の森。現在は豊かな緑に囲まれた都会のオアシスとなっており、森の中の池に神くじを浸すと文字が浮かび上がる「水みくじ」は、特に若い世代やカップルに大人気のアトラクションとなっています。',
        imagePath: '/ikutajinja.jpg',
        mapUrl: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.6277977793466!2d135.19145927633246!3d34.69133488383842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008ee8201a0cb9%3A0xe67bf8f498fdfe6c!2z55Sf55Sw56We56S-!5e0!3m2!1sja!2sjp!4v1710000000003!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        area: '三宮駅周辺エリア',
        orderScore: 20
      },
      {
        id: 'kyuukyoryuchi',
        name: '旧居留地',
        kana: 'きゅうきゅうりゅうち',
        desc: '明治時代の面影が残るおしゃれなエリア。',
        longDesc: '元町エリアと三宮エリアの間に位置する旧居留地は、1868年の神戸開港にともない、外国人の住居やビジネスの拠点として造られた特別な街区です。イギリス人の土木技師によって設計された格子状の美しい街路や、当時の区画番号（番館）が今もそのまま使われており、一歩足を踏み入れると、まるでヨーロッパのビジネス街を歩いているかのような気品ある佇まいが出迎えてくれます。\nこのエリアの最大の魅力は、大正から昭和初期にかけて建てられた重厚な石造りの近代建築（洋館）群です。「旧居留地15番館」（国の重要文化財）をはじめ、クラシックなビルが数多く现存。現在はそれらの歴史的建造物の内部が、世界的なハイブランドのブティックや高級セレクトショップ、洗練されたお洒落なカフェにリノベーションされており、神戸の歴史と最先端のトレンドが美しく融合しています。\n夜になると街灯が優しく灯り、昼間とは一味違うクラシカルでロマンチックな雰囲気に。毎年冬に開催される光の祭典「神戸ルミナリエ」の主要会場としても知られ、大人の気品漂う「ハイカラな神戸」を象徴する、そぞろ歩きにぴったりなスポットです。',
        imagePath: '/kyuukyoryuchi.jpg',
        mapUrl: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13122.676513145756!2d135.16965638074737!3d34.688299296294566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008efc7aafbd25%3A0xdec1e1c484dbbd32!2z5pen5bGF55WZ5ZywIOODleODquODvOOCpuOCqeODvOOCr--8iOaYjuefs-eUuueti--8iQ!5e0!3m2!1sja!2sjp!4v1780411774011!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        area: '旧居留地エリア',
        orderScore: 35
      },
      {
        id: 'ha-buen',
        name: '神戸布引ハーブ園',
        kana: 'こうべぬのびきはーぶえん',
        desc: '山の上の絶景ハーブ園。ロープウェイも楽しい。',
        longDesc: '新幹線も止まる「新神戸駅」からすぐのロープウェイに乗り、約10分の空中散歩を楽しんだ先にある、標高約400メートルの山上に位置するリゾート施設です。園内にはテーマの異なる12のガーデンがあり、四季折々、約200種75,000株ものハーブや花々が咲き誇る、日本最大級の規模を誇ります。\nロープウェイの車窓や園内の各展望エリアからは、神戸の瑞々しい街並みや、はるか広がる神戸港の青い海を贅沢に見渡すことができます。ドイツの古城をモチーフにしたお洒落なレストハウス、ハーブを使った美食が味わえるレストラン、絶景を見下ろしながら温まれる「誓いの庭の足湯」など、五感で癒やされるスポットが満載です。\n週末を中心とした夜間営業日には、神戸の1,000万ドルの夜景とともに、園内が幻想的な光に包まれるイルミネーションイベントも開催。都会のすぐ裏手にありながら、日常を忘れて自然の香りと絶景に浸れる、とっておきの天空の楽園です。',
        imagePath: '/ha-buen.jpg',
        mapUrl: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52490.65478291429!2d135.13875623080824!3d34.688380152275016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008ed15662aa59%3A0x825ca47fbd678f55!2z56We5oi45biD5byV44OP44O844OW5ZyS77yP44Ot44O844OX44Km44Kn44KkIEtvYmUgTnVub2Jpa2kgSGVyYiBHYXJkZW5zICYgUm9wZXdheQ!5e0!3m2!1sja!2sjp!4v1780411851017!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        area: '山側エリア',
        orderScore: 5
      }
    ]
  },
  {
    genre: '食物',
    id: 'food',
    icon: '🥩',
    spots: [
      { 
        id: 'beef', 
        name: '神戸牛', 
        kana: 'こうべぎゅう',
        desc: '日本を代表する最高級和牛。', 
        longDesc: '神戸に来たら絶対に外せない、日本を代表する最高級の高級ブランド和牛です。実は「神戸牛」という品種の牛がいるわけではなく、兵庫県内で生まれ育った純血の「但馬牛（たじまうし）」の中から、霜降りの度合い（BMS値）や肉質、体重など、日本一厳しいとされる選考基準をクリアした最高品質の肉だけが「神戸ビーフ（神戸牛）」の称号を与えられます。\n最大の魅力は、お肉に網の目のように美しく入った「サシ（脂肪分）」です。神戸牛の脂は融点が非常に低く、人肌の温度で溶けてしまうほど。そのため、口に入れた瞬間にトロリととろけるような独特の食感と、上品でコクのある甘みが広がります。\n三宮や元町周辺には、目の前の鉄板で職人が焼き上げてくれるステーキ専門店が数多く立ち並びます。芳醇な香りとジューシーな旨味をシンプルに味わうステーキはもちろん、すき焼きやしゃぶしゃぶでもその実力を遺なく発揮。世界中の美食家たちから「至高の芸術品」と称賛される、贅沢で特別なグルメ体験を約束してくれる逸品です。',
        imagePath: '/beef.jpg',
        mapUrl: '',
        area: '三宮駅周辺エリア',
        orderScore: 25
      },
      {
        id: 'butaman',
        name: '豚まん',
        kana: 'ぶたまん',
        desc: '神戸の代表的な中華料理。',
        longDesc: '神戸に根付く「ハイカラな食文化」のなかでも、長年市民や観光客に愛され続けているのが、中華街・南京町を発祥とする「豚まん」です。関東などでは「肉まん」と呼ばれることが多いですが、関西、特に神戸では「肉といえば牛肉」を指す文化が強いため、区別して「豚まん」の名で親しまれています。\n一番の特徴は、ほんのり甘みがあってモチモチとした食べ応えのある手作りの「皮（生地）」と、それに負けないくらいジューシーな「餡（具材）」の絶妙なバランスです。厳選された豚肉と、粗みじんに切られた玉ねぎをたっぷり使い、素材本来の旨味とコク、 arena そして甘みがギュッと閉じ込められています。\n南京町には、行列の絶えない老舗「老祥記（ろうしょうき）」をはじめ、大ぶりで満足感抜群の「四興樓（しこうろう）」、上品な味わいの「三宮一貫楼（いっかんろう）」など、それぞれ個性の異なる有名店が点在。お店によっては醤油や特製のカラシ、あるいは酢醤油をつけて食べるのが神戸流です。街歩きのお供にはもちろん、お土産としても圧倒的な人気を誇る、神戸を代表するソウルフードです。',
        imagePath: '/butaman.jpg', 
        mapUrl: '',
        area: '元町エリア',
        orderScore: 31
      },
      { 
        id: 'baumkuchen', 
        name: 'バームクーヘン', 
        kana: 'ばーむくーへん',
        desc: '神戸スイーツの代表格。', 
        longDesc: '港町として早くから西欧の文化を受け入れてきた神戸は、日本屈指の「洋菓子の街」として知られています。その神戸スイーツの歴史を語る上で欠かせないのが、お祝い事の定番や日々のおやつとして広く親しまれている「バームクーヘン」です。\n神戸のバームクーヘンの特徴は、なんといっても職人のこだわりが生み出す「しっとり感」と「豊かな風味」にあります。厳選された卵、バター、小麦粉を贅沢に使用し、幾重にも層を重ねてじっくりと焼き上げられた生地は、口に運ぶと驚くほど上品な甘みとコクが広がります。周囲に薄くまとわせたフォンダン（砂糖衣）のシャリッとした食感が、お肉の美味しさを引き立てる絶妙なアクセントになっているお店も多いです。\nドイツの伝統的な製法を守り続ける老舗「ユーハイム」をはじめ、神戸にはこだわりのバームクーヘンを提供するパティスリーが多数点在しています。木の年輪を思わせるその見た目から「長寿」や「繁栄」を願う縁起物としても愛されており、大切な人へのギフトや、神戸旅行の上品なお土産として間違いのない逸品です。',
        imagePath: '/baumkuchen.jpg', 
        mapUrl: '',
        area: '三宮駅周辺エリア',
        orderScore: 22
      },
      {
        id: 'pan',
        name: 'パン',
        kana: 'ぱん',
        desc: '毎日の食卓を彩る「パンの聖地」',
        longDesc: '港町として発展してきた神戸は、実は「1世帯あたりのパン消費量や支出額」が全国トップクラスを誇る、日本きっての「パンの街」です。1868年の開港とともに外国人留学生や職人が移り住み、いち早く本場のフランスパンや食パンの技術が伝わったことから、独自の洗練されたベーカリー文化が花開きました。\n神戸のパンの特徴は、職人たちの強いこだわりと、日常生活に深く根charactarされた多様性にあります。何十年も市民の朝食を支え続ける「毎日の食パン」から、ハード系の本格フランスパン、おやつにぴったりの惣菜パンや菓子パンまで、街のあちこちにある名店がそれぞれ独自の味を競い合っています。\n日本に初めて本格的なフランスパンを広めたとされる「ドンク（DONK）」の本店をはじめ、神戸の食パンブームの先駆けである「トミーズのあん食」、レトロなパッケージとミルククリームが懐かしい「イスズベーカリー」のミルクフランスなど、数げればキリがないほどの名物パンが存在します。観光の合間に香ばしい香りに誘われてベーカリーを巡るのも、神戸ならではの贅沢な楽しみ方です。',
        imagePath: '/pan.jpg', 
        mapUrl: '',
        area: '元町エリア',
        orderScore: 32
      }
    ]
  },
  {
    genre: 'イベント・祭り',
    id: 'events',
    icon: '🎉',
    spots: [
      { 
        id: 'kobematuri', 
        name: '神戸まつり', 
        kana: 'こうべまつり',
        desc: '街が一体となる神戸最大級のイベント。', 
        longDesc: '毎年5月に開催され、神戸の街が一年で最も熱くエネルギッシュに盛り上がる、兵庫県内最大級のイベントです。1971年に「市民総参加の祭典」として誕生して以来、神戸の歴史、文化、そして国際色豊かな力を発信し続けており、初夏の風物詩として広く親しまれています。\nメインフェスティバルは、三宮のフラワーロードや旧居留地周辺を中心に開催されます。お祭りの最大のハイライトは、華やかな衣装に身を包んだダンサーたちが情熱的に躍る「サンバストリート」です。神戸の国際性を象徴する軽快なサンバのリズムに合わせて、街全体が一体となって盛り上がります。さらに、大迫力のパレードや、地元のグルメ・世界各国の料理が味わえる数多くの屋台、市民によるステージパフォーマンスなど、見どころが満載です。\nまた、メイン会場だけでなく、神戸市内の各区でも地域に密着したユニークなまつりが同時開催されるのも特徴です。子どもから大人まで、そして国籍を問わず誰もが笑顔で楽しめる、神戸の「元気」と「多様性」がぎゅっと詰まった最高の市民お祭りです。',
        imagePath: '/kobematuri.jpg', 
        mapUrl: '',
        area: '三宮駅周辺エリア',
        orderScore: 21
      },
      { 
        id: 'ruminarie', 
        name: '神戸ルミナリエ',
        kana: 'こうべるみなりえ', 
        desc: '震災の記憶を語り継ぐ希望の光。', 
        longDesc: '旧外国人居留地や東遊園地を中心に開催される光の芸術です。',
        imagePath: '/ruminarie.jpg', 
        mapUrl: '',
        area: '旧居留地エリア',
        orderScore: 36
      },
      {
        id: 'minato',
        name: 'みなとまつり',
        kana: 'みなとまつり',
        desc: '神戸最大級のサマーフェスティバル', 
        longDesc: '毎年7月中旬〜下旬の週末に、ウォーターフロントの「メリケンパーク」を舞台に開催される、神戸市内最大級の夏祭りです。神戸の発展を支えてきた「海」と「港」への感謝を理念に掲げ、神戸青年会議所（JC）をはじめとする市民の手によって企画・運営されている市民参加型の国際色豊かなイベントです。\n祭りの大きな魅力は、会場を埋め尽くす多彩なステージと体験型アクティビティです。特設ステージでは、人気アーティストの音楽ライブや地元学生による力強いダンス、伝統的な獅子舞などが次っと披露され、熱気に包まれます。日中には、大人も子どもも一緒になってびしょ濡れで盛り上がる「水かけまつり」や、夜の港を幻想的に彩る「ナイトバブルショー」など、夏らしさ満点のアトラクションが会場を盛り上げます。\nさらに、地元の人気グルメや世界各国の料理が手軽に味わえる飲食ブース、キッチンカーが数多く出店するのも楽しみの一つ。海風を感じながら絶品スタミナ料理や冷たいスイーツに舌鼓を打てます。港町ならではの開放的なロケーションの中で、神戸のエネルギーと真夏の活気を五感で満喫できる、市民にも観光客にも大人気のサマーフェスティバルです。',
        imagePath: '/hanabi.jpg', 
        mapUrl: '',
        area: '海側エリア',
        orderScore: 45
      },
      {
        id: 'syunsetusai',
        name: '神戸春節祭',
        kana: 'こうべしゅんせつさい',
        desc: '神戸の中華街で行われる春節祭。', 
        longDesc: '毎年1月下旬から2月中旬にかけて、中華街・南京町を中心に開催される、中国の旧正月（春節）を祝う神戸の冬の一大ビッグイベントです。1987年に日本の異国情緒豊かな文化を広く紹介するために始まって以来、今では神戸を代表する伝統的なお祭りとして定着し、期間中は全国から数十万人もの観光客が訪れます。\nお祭りの幕開けを告げるのは、鳴り響く爆竹の轟音と、中国の伝統衣装を身にまとった華やかなパレード「中国史劇衣装行列」です。三国志の英雄や絶世の美女に変身した市民たちが元町や三宮の街を練り歩き、一気にお祝いムードに染め上げます。\n最大のハイライトは、南京町広場で披露される「獅子舞」や「龍踊（じゃおどり）」の伝統芸能です。太鼓やシンバルの激しいリズムに合わせ、生きているかのようにアクロバティックに躍動する極彩色の獅子や龍の姿は圧巻の一言。そのほか、豪華な賞品が当たるポチ袋（くじ）の販売や、春節祭限定の特別なメニューや屋台グルメも登場し、五感すべてで中国の歴史あるお正月文化と、神戸ならではの国際的な活気を体感できるエネルギッシュな祭典です。',
        imagePath: '/syunsetu.jpg', 
        mapUrl: '',
        area: '元町エリア',
        orderScore: 33
      }
    ]
  }
];

export default function Home() {
  const [currentGenre, setCurrentGenre] = useState(KOBE_MASTER_DATA[0]);
  const [selectedSpot, setSelectedSpot] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [isPlanningMode, setIsPlanningMode] = useState(false); 
  const [checkedSpotIds, setCheckedSpotIds] = useState<string[]>([]); 
  const [isRouteMode, setIsRouteMode] = useState(false); 
  const [efficientRoute, setEfficientRoute] = useState<any[]>([]); 

  const filteredSpots = searchQuery
    ? KOBE_MASTER_DATA.flatMap(genre => genre.spots).filter(spot =>
        spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (spot.kana && spot.kana.includes(searchQuery))
      )
    : currentGenre.spots;

  const allSpots = KOBE_MASTER_DATA.flatMap(genre => genre.spots);
  const checkedSpots = allSpots.filter(spot => checkedSpotIds.includes(spot.id));

  const calculateEfficientRoute = () => {
    const sorted = [...checkedSpots].sort((a, b) => (a.orderScore || 0) - (b.orderScore || 0));
    setEfficientRoute(sorted);
    setIsRouteMode(true);
    setSelectedSpot(null);
  };

  const toggleSpotCheck = (spotId: string) => {
    if (checkedSpotIds.includes(spotId)) {
      setCheckedSpotIds(checkedSpotIds.filter(id => id !== spotId));
    } else {
      setCheckedSpotIds([...checkedSpotIds, spotId]);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-800 flex flex-col">
      
      {/* 📌 ① 上部ヘッダーエリア */}
      <header className="w-full bg-[#003366] text-white px-6 py-4 sticky top-0 z-20 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 
          className="text-2xl font-bold tracking-wider shrink-0 text-center md:text-left cursor-pointer" 
          onClick={() => { setIsRouteMode(false); setSelectedSpot(null); }}
        >
          CHUO GUIDE
        </h1>
        
        {!selectedSpot && !isRouteMode && (
          <div className="w-full max-w-md mx-auto md:mx-0 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 text-base">🔍</span>
            <input
              type="text"
              placeholder="スポットを検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-2 bg-white border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm text-slate-700 shadow-inner"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute inset-y-0 right-0 pr-4 text-slate-400 text-sm font-bold">✕</button>
            )}
          </div>
        )}

        {!isRouteMode && (
          <button
            onClick={() => {
              if (isPlanningMode) {
                setCheckedSpotIds([]); 
              }
              setIsPlanningMode(!isPlanningMode);
            }}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all shadow-sm shrink-0 border flex items-center gap-2 ${
              isPlanningMode 
                ? 'bg-orange-500 border-orange-400 text-white hover:bg-orange-600' 
                : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
            }`}
          >
            {isPlanningMode ? '🎒 計画モードを終了する' : '🗺️ 効率よいまわり方を調べる'}
          </button>
        )}
      </header>

      {/* 下半分のエリア */}
      <div className="flex-1 flex flex-col md:flex-row pb-32">
        
        {/* 📌 ② 左側：ジャンル選択サイドバー */}
        <aside className="w-full md:w-60 bg-white border-r border-slate-200 p-6 md:sticky md:top-[76px] md:h-[calc(100vh-76px)] flex flex-col shrink-0">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-3">ジャンル選択</p>
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
            {KOBE_MASTER_DATA.map((g) => {
              const isActive = !searchQuery && currentGenre.id === g.id && !isRouteMode;
              return (
                <button
                  key={g.id}
                  onClick={() => { 
                    setCurrentGenre(g); 
                    setSelectedSpot(null); 
                    setSearchQuery(''); 
                    setIsRouteMode(false);
                  }}
                  className={`py-3 px-4 rounded-xl text-xs md:text-sm font-bold flex items-center gap-3 transition-all shrink-0 md:w-full ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600 shadow-sm border border-blue-200 md:translate-x-1' 
                      : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <span className="text-lg md:text-xl">{g.icon}</span>
                  <span>{g.genre}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* 📌 ③ 右側：メインコンテンツエリア */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto">
          
          {isRouteMode ? (
            /* 🗺️ ルート結果表示画面 */
            <div className="animate-in fade-in duration-300 max-w-2xl mx-auto">
              <button
                onClick={() => { setIsRouteMode(false); setIsPlanningMode(true); }}
                className="mb-6 text-sm font-bold text-blue-600 flex items-center hover:bg-blue-50 py-2 px-3 rounded-xl transition-all border border-transparent hover:border-blue-200"
              >
                ← 計画画面（選択変更）に戻る
              </button>

              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-md border border-slate-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🗺️</span>
                  <h2 className="text-xl md:text-2xl font-bold text-[#003366]">神戸満喫・おすすめ巡回ルート</h2>
                </div>
                <p className="text-xs md:text-sm text-slate-500 mb-8 leading-relaxed">
                  坂道の高低差（山側から海側への流れ）を考慮した、一番スムーズで体力を消耗しない効率的なまわり方です！
                </p>

                <div className="relative border-l-2 border-blue-200 ml-4 pl-6 space-y-6">
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1.5 bg-blue-600 text-white w-4 h-4 rounded-full ring-4 ring-blue-100"></span>
                    <p className="text-xs font-bold text-blue-600 tracking-wider">START</p>
                    <h4 className="text-base font-bold text-slate-800">三宮駅 または 新神戸駅</h4>
                  </div>

                  {efficientRoute.map((spot, index) => (
                    <div key={spot.id} className="relative animate-in slide-in-from-left-4 duration-300">
                      <span className="absolute -left-[34px] top-5 bg-blue-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold shadow-sm">
                        {index + 1}
                      </span>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm flex gap-4 items-center">
                        {spot.imagePath && (
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-200">
                            <Image src={spot.imagePath} alt={spot.name} fill className="object-cover" onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }} />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <h4 className="text-base font-bold text-slate-800">{spot.name}</h4>
                            <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full">{spot.area}</span>
                          </div>
                          <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{spot.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="relative pt-2">
                    <span className="absolute -left-[31px] top-4 bg-emerald-600 text-white w-4 h-4 rounded-full ring-4 ring-emerald-100"></span>
                    <p className="text-xs font-bold text-emerald-600 tracking-wider">GOAL</p>
                    <h4 className="text-base font-bold text-slate-800">1日お疲れ様でした✨</h4>
                  </div>
                </div>

                <button
                  onClick={() => { setIsRouteMode(false); setIsPlanningMode(false); setCheckedSpotIds([]); }}
                  className="w-full mt-8 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl transition-all text-sm text-center"
                >
                  ルート案内を閉じて、通常のガイドに戻る
                </button>
              </div>
            </div>
          ) : !selectedSpot ? (
            /* 📋 スポット一覧画面（ホーム） */
            <div className="animate-in fade-in slide-in-from-top-4 duration-500 max-w-5xl mx-auto">
              
              {isPlanningMode && (
                <div className="bg-orange-50 border border-orange-200 p-4 rounded-2xl mb-6 text-sm text-orange-800 flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <span className="text-2xl">🎒</span>
                  <div>
                    <p className="font-bold">「まわり方計画モード」がオンになっています</p>
                    <p className="text-xs text-orange-600 mt-0.5">※ルート最適化は「観光地」スポットのみ選択可能です（食物・イベントは通常詳細のみ）。</p>
                  </div>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-200 pb-4">
                <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                  {searchQuery ? `🔍 全体検索結果` : `「${currentGenre.genre}」のおすすめ`}
                </h2>
              </div>

              {filteredSpots.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredSpots.map((spot) => {
                    const isChecked = checkedSpotIds.includes(spot.id);
                    const isSightseeingSpot = KOBE_MASTER_DATA.find(g => g.id === 'sightseeing')?.spots.some(s => s.id === spot.id);
                    
                    const handleCardClick = () => {
                      if (isPlanningMode) {
                        if (isSightseeingSpot) {
                          toggleSpotCheck(spot.id);
                        }
                      } else {
                        setSelectedSpot(spot);
                      }
                    };

                    return (
                      <div
                        key={spot.id}
                        onClick={handleCardClick}
                        className={`p-4 md:p-5 border rounded-2xl hover:shadow-xl transition-all bg-white group flex gap-4 min-h-[140px] items-start ${
                          isPlanningMode 
                            ? isSightseeingSpot
                              ? isChecked 
                                ? 'border-orange-500 ring-2 ring-orange-100 bg-orange-50/30 cursor-pointer' 
                                : 'border-slate-200 hover:border-orange-300 cursor-pointer'
                              : 'border-slate-200 opacity-60 cursor-not-allowed'
                            : 'border-slate-200 cursor-pointer'
                        }`}
                      >
                        {/* 丸角のアイキャッチ画像 */}
                        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-100">
                          {spot.imagePath ? (
                            <Image
                              src={spot.imagePath}
                              alt={spot.name}
                              fill
                              className={`object-cover transition-transform duration-300 ${!isPlanningMode || isSightseeingSpot ? 'group-hover:scale-105' : ''}`}
                              onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-300 font-bold text-xs bg-slate-50">
                              No Image
                            </div>
                          )}
                        </div>

                        {/* テキスト中身領域 */}
                        <div className="flex-1 flex flex-col justify-between h-full min-h-[96px]">
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h3 className={`text-base md:text-lg font-bold leading-snug transition-colors ${
                                isPlanningMode && isChecked ? 'text-orange-600' : (!isPlanningMode || isSightseeingSpot) ? 'group-hover:text-blue-600' : ''
                              }`}>
                                {spot.name}
                              </h3>
                              
                              {isPlanningMode && isSightseeingSpot && (
                                <div
                                  className={`w-6 h-6 rounded-md border flex items-center justify-center text-xs font-bold transition-all shrink-0 ${
                                    isChecked 
                                      ? 'bg-orange-500 border-orange-500 text-white' 
                                      : 'border-slate-300 bg-slate-50 text-transparent'
                                  }`}
                                >
                                  ✓
                                </div>
                              )}
                            </div>
                            <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3">{spot.desc}</p>
                          </div>
                          
                          <div className="text-right mt-2">
                            <span className={`text-xs font-bold inline-block transition-all ${
                              isPlanningMode 
                                ? isSightseeingSpot
                                  ? 'text-orange-500' 
                                  : 'text-slate-400 font-normal'
                                : 'text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                            }`}>
                              {isPlanningMode 
                                ? isSightseeingSpot
                                  ? isChecked ? '選択解除' : 'ここを選ぶ' 
                                  : '（ルート対象外）' 
                                : '詳細を見る →'
                              }
                            </span>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-20 text-slate-400 bg-white rounded-2xl border border-dashed border-slate-300 shadow-sm">
                  <p className="text-xl font-bold mb-2">😥 スポットが見つかりません</p>
                </div>
              )}
            </div>
          ) : (
            /* 詳細画面 */
            <div className="animate-in zoom-in-95 fade-in duration-300 max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedSpot(null)}
                className="mb-6 text-sm font-bold text-blue-600 flex items-center hover:bg-blue-50 py-2 px-3 rounded-xl transition-all border border-transparent hover:border-blue-200"
              >
                ← 一覧に戻る
              </button>
              
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                {selectedSpot.imagePath && (
                  <div className="relative w-full h-64 md:h-80 mb-8 rounded-2xl overflow-hidden shadow-md bg-slate-100">
                    <Image
                      src={selectedSpot.imagePath}
                      alt={selectedSpot.name}
                      fill
                      className="object-cover"
                      priority
                      onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
                    />
                  </div>
                )}
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">{selectedSpot.name}</h2>
                <div className="w-20 h-1 bg-blue-600 mb-8 rounded-full"></div>
                <p className="text-base md:text-lg leading-relaxed text-slate-600 whitespace-pre-wrap mb-10">{selectedSpot.longDesc}</p>
                
                {/* 🗺️ 【修正箇所】selectedSpot.mapUrl が存在するときだけ、マップエリアを表示 */}
                {selectedSpot.mapUrl && (
                  <div className="mt-8 border-t border-slate-200 pt-8">
                    <h3 className="text-lg font-bold mb-4 text-slate-800 flex items-center gap-2">
                      📍 アクセス・マップ
                    </h3>
                    <div 
                      className="w-full h-[350px] rounded-2xl overflow-hidden shadow-sm border border-slate-200 [&_iframe]:w-full [&_iframe]:h-full"
                      dangerouslySetInnerHTML={{ __html: selectedSpot.mapUrl }}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 📌 ④ マイ旅行計画パネル（下部固定） */}
      {isPlanningMode && checkedSpotIds.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-8px_30px_rgb(0,0,0,0.12)] p-4 z-30 animate-in slide-in-from-bottom-full duration-300">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-800 flex items-center gap-2">
                🎒 現在の選択プラン
                <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                  {checkedSpotIds.length} 件選択中
                </span>
              </p>
              
              <div className="flex flex-wrap gap-1.5 mt-2 max-h-12 overflow-y-auto">
                {checkedSpots.map(spot => (
                  <span key={spot.id} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 font-medium">
                    {spot.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 justify-end">
              <button
                onClick={() => setCheckedSpotIds([])}
                className="px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-100 rounded-xl transition-all"
              >
                選択クリア
              </button>
              
              <button
                onClick={calculateEfficientRoute}
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-3 rounded-xl shadow-md transition-all flex items-center gap-2 text-sm"
              >
                🗺️ この内容でルートを作成
              </button>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}
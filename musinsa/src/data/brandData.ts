import { Brand } from '../types/brand';


export const BRANDS_DATA: Brand[] = [
    {
      // --- 커스텀어클락 브랜드 ---
      id: 1,
      info: {
        name: '커스텀어클락',
        englishName: 'COSTUME O’CLOCK',
        likesCount: '19.8만',
        greeting: '커스텀어클락(COSTUME O’CLOCK)은 위트 있는 클래식과 캐주얼의 밸런스를 중점으로 일상적인 아이템 속에 미니멀한 감성을 담는 시티 포멀 웨어를 제공하는 브랜드입니다.',
        country: '한국',
        since: 'Since 2010',
        logoImageUrl: 'https://image.msscdn.net/thumbnails/images/brand/white_logo_img/costumeoclock.svg?fit=without_padding&ts=20230608174403',
      },
      sections: {
        // 섹션 1: 대표 상품군
        featured: [
          {
            id: 1001,
            imageUrl: 'https://image.msscdn.net/campaign_service/images/plan/2025/9416129709ea4c12942de8a86779267b.jpg',
            title: '삭형 PICK',
          },
          {
            id: 1002,
            imageUrl: 'https://image.msscdn.net/campaign_service/images/plan/2025/5be065c946214995b12aa8a9bfb5b8d8.jpg',
            title: '25FW MAN 3차 신상',
          },
          {
            id: 1003,
            imageUrl: 'https://image.msscdn.net/display/images/2025/09/30/c7bca26de64c439aab1c6c75ccf6818a.jpg',
            title: '우먼 25 WT 신상 발매',
          },
          {
            id: 1004,
            imageUrl: 'https://image.msscdn.net/campaign_service/images/plan/2025/0c3ea0363f9448a9b4071f2702be569f.jpg',
            title: '25FW MAN 3차 신상',
          },
          {
            id: 1005,
            imageUrl: 'https://image.msscdn.net/campaign_service/images/plan/2025/b1fa03cfbc6c413689c20744dc3674cc.JPG',
            title: '우먼 인플루언서 PICK',
          },
        ],
        // 섹션 2: 실시간 랭킹
        ranking: [
          { id: 2001, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=1000', name: '[2PACK] 소프트 베이직 가디건', price: 49900 , salePercent: 58 },
          { id: 2002, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250904/5402318/5402318_17574807049011_big.jpg?w=1000', name: '[연둡 PICK] [우먼] 베이직 라운드 골지 니트 8 COLOR COWKT002', price:40800 , salePercent: 27 },
          { id: 2003, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250904/5402053/5402053_17576390386411_big.jpg?w=1000', name: '[예진 PICK] [우먼] 슬림 헨리넥 골지 니트 6 COLOR COWKT004', price: 34300, salePercent: 30 },
          { id: 2004, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250904/5402351/5402351_17574880491023_big.jpg?w=1000', name: '[예진 PICK] [우먼] 베이직 브이넥 골지 니트 8 COLOR COWKT001', price: 40800, salePercent: 27 },
          { id: 2005, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250904/5402401/5402401_17574728522715_big.jpg?w=1000', name: '[예진 PICK] [우먼] 베이직 브이넥 가디건 8 COLOR COWCD001', price: 124000, salePercent: 50 },
          { id: 2006, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20240925/4461075/4461075_17278342434024_big.jpg?w=1000', name: '[삭형 PICK] 울 블렌드 핸드 메이드 더블 코트 블랙 COOSCT025BLACK', price: 43400, salePercent: 30 },
          { id: 2007, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20240911/4433343/4433343_17592893001197_big.jpg?w=1000', name: '[데일리룸 PICK] 하찌 라운드 헤비 니트 풀오버 11 COLOR COOSKT066', price: 43400, salePercent:  50},
          { id: 2008, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250904/5402126/5402126_17574856632670_big.jpg?w=1000', name: '[예진 PICK] [SET] [우먼] 슬림 골지 니트 세트 COWKT3456SET', price:49000 , salePercent: 50 },
          { id: 2009, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250821/5351502/5351502_17561839545796_big.jpg?w=1000', name: '루즈핏 플레어 슬랙스 블랙 COOSPT250BLACK', price: 53100, salePercent: 23 },
          { id: 2010, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20240911/4433295/4433295_17592893724316_big.jpg?w=1000', name: '[데일리룸 PICK] 케이블 하프 집업 헤비 니트 풀오버 8 COLOR COOSKT069', price: 43400, salePercent:30  },

        ],
        // 섹션 3: 신상품
        newArrivals: [
          { id: 3001, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250929/5546699/5546699_17592000916295_big.jpg?w=1000', name: '[우먼] 벨티드 발마칸 롱 코트 블랙 COWCT001BLACK', price: 159200, salePercent: 20 },
          { id: 3002, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250929/5546686/5546686_17592006386099_big.jpg?w=1000', name: '[우먼] 벨티드 발마칸 롱 코트 다크그레이 COWCT001DGRAY', price: 159200, salePercent: 20 },
          { id: 3003, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250929/5546673/5546673_17592115077622_big.jpg?w=1000', name: '[우먼] 벨티드 발마칸 롱 코트 오트밀 COWCT001OATMEAL', price: 159200, salePercent: 20 },
          { id: 3005, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250922/5504973/5504973_17588692907304_big.jpg?w=1000', name: '라이트웨이트 후드 덕다운 패딩 자켓 블랙 COOSJP051BLACK', price: 99000, salePercent: 29 },
          { id: 3006, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250922/5504959/5504959_17588697490691_big.jpg?w=1000', name: '라이트웨이트 후드 덕다운 패딩 자켓 라이트그레이 COOSJP051LGRAY', price: 99000, salePercent: 29 },
          { id: 3007, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250922/5504937/5504937_17588702953713_big.jpg?w=1000', name: '라이트웨이트 후드 덕다운 패딩 자켓 글로시블랙 COOSJP051GLOSSYBK', price: 99000, salePercent: 29},
          { id: 3008, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250915/5462337/5462337_17581886038519_big.jpg?w=1000', name: '[삭형 PICK] 코튼 커브드 워시드 블루종 자켓 네이비 COOSJK042NAVY', price: 86800, salePercent: 23 },
          { id: 3009, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250915/5462316/5462316_17581888990796_big.jpg?w=1000', name: '[삭형 PICK] 커브드 기모 하프 집업 맨투맨 3 COLOR COOSTS261', price: 44200, salePercent: 30 },
          { id: 3010, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250915/5462299/5462299_17586872615776_big.jpg?w=1000', name: '[삭형 PICK] 커브드 기모 후드 티셔츠 3 COLOR COOSTS262', price: 44200, salePercent: 33},
          { id: 3011, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250904/5402427/5402427_17574840447383_big.jpg?w=1000', name: '[예진 PICK] [SET] [우먼] 베이직 가디건 골지 니트 세트 COWCDKTSET', price: 56000, salePercent: 50 },


        ],
        // 섹션 4: 단독 상품
        exclusive: [
          { id: 4001, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250929/5546699/5546699_17592000916295_big.jpg?w=1000', name: '[우먼] 벨티드 발마칸 롱 코트 블랙 COWCT001BLACK', price:159200, salePercent: 20 },
          { id: 4002, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250929/5546686/5546686_17592006386099_big.jpg?w=1000', name: '[우먼] 벨티드 발마칸 롱 코트 다크그레이 COWCT001DGRAY', price:159200, salePercent: 20 },
          { id: 4003, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250929/5546673/5546673_17592115077622_big.jpg?w=1000', name: '[우먼] 벨티드 발마칸 롱 코트 오트밀 COWCT001OATMEAL', price:159200, salePercent: 20  },
          { id: 4004, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250922/5504973/5504973_17588692907304_big.jpg?w=1000', name: '라이트웨이트 후드 덕다운 패딩 자켓 블랙 COOSJP051BLACK', price:99200, salePercent: 29 },
          { id: 4005, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250922/5504959/5504959_17588697490691_big.jpg?w=1000', name: '라이트웨이트 후드 덕다운 패딩 자켓 라이트그레이 COOSJP051LGRAY', price:99000, salePercent:  29},
          { id: 4006, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250922/5504951/5504951_17588700381555_big.jpg?w=1000', name: '라이트웨이트 후드 덕다운 패딩 자켓 브라운 COOSJP051BROWN', price:99000  , salePercent: 29 },
          { id: 4007, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250922/5504937/5504937_17588702953713_big.jpg?w=1000', name: '라이트웨이트 후드 덕다운 패딩 자켓 글로시블랙 COOSJP051GLOSSYBK', price:99000, salePercent:29  },
          { id: 4008, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250915/5462373/5462373_17586758213397_big.jpg?w=1000', name: '코튼 커브드 워시드 블루종 자켓 블랙 COOSJK042BLACK', price:78400, salePercent: 30 },
          { id: 4009, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250915/5462355/5462355_17581881797561_big.jpg?w=1000', name: '[삭형 PICK] 코튼 커브드 워시드 블루종 자켓 브라운 COOSJK042BROWN', price:86200, salePercent: 26 },
          { id: 4010, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250915/5462337/5462337_17581886038519_big.jpg?w=1000', name: '[삭형 PICK] 코튼 커브드 워시드 블루종 자켓 네이비 COOSJK042NAVY', price:86200, salePercent: 23 },
        ],
        // 섹션 5: #TAGS
        tags: {
          tags: ['#WINTER', '#SWEAT', '#WOMAN', '#25FW', '#FALL', '#2PACK'],
          products: [
            {
              id: 5001,
              imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=1000',
              name: '[삭형 PICK] [2PACK] 소프트 베이직 가디건 COOSCD001CD020CD021 상품상세로 이동',
              price: 49900,
              salePercent: 58
                
            },
            {
                id:5002,
                imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20250204/4757327/4757327_17389077818389_big.jpg?w=1000',
                name:'[삭형 PICK] [2PACK] 소프트 라운드 가디건',
                price:44900,
                salePercent: 24
            
            },
            {
                id:5003,
                imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20250204/4757327/4757327_17389077818389_big.jpg?w=1000',
                name:'[삭형 PICK] [2PACK] 소프트 베이직 라운드 가디건 차콜',
                price:44900,
                salePercent: 24
            
            },
            {
                id:5004,
                imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20250915/5462373/5462373_17586758213397_big.jpg?w=1000',
                name:'코튼 커브드 워시드 블루종 자켓 블랙 COOSJK042BLACK',
                price:86200,
                salePercent: 23
            
            },
            {
        id:5005,
        imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20170313/498040/498040_17399299481276_big.jpg?w=1000',
        name:'[리뉴얼ver.] 소프트 베이직 브이넥 가디건 블랙 COOSCD001BLACK',
        price:44900,
        salePercent: 24
    },        {
        id:5006,
        imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20210928/2150099/2150099_17171222213401_big.jpg?w=1000',
        name:'[2PACK] 에센셜 코튼 베이직 3 스타일 니트 COOSKT025',
        price:41300,
        salePercent: 65
    },
    {
        id:5007,
        imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20240911/4433343/4433343_17592893001197_big.jpg?w=1000',
        name:'[데일리룸 PICK] 하찌 라운드 헤비 니트 풀오버 11 COLOR COOSKT066',
        price:43400,
        salePercent: 20
    },
    {
      id:5008,
      imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20231007/3611966/3611966_17592106500436_big.jpg?w=1000',
      name:'[연둡 PICK] 라운드 피셔맨 세미 크롭 니트 11 COLOR COOSKT050',
      price:43400,
      salePercent: 13
  },
  {
    id:5009,
    imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20240208/3859221/3859221_17418329955775_big.jpg?w=1000',
    name:'[2PACK] 데일리 롱 슬리브 셔츠 17 COLOR COOSSH186SH188SH190',
    price:78400,
    salePercent: 8
},
{
  id:5010,
  imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20240911/4433343/4433343_17592893001197_big.jpg?w=1000',
  name:'[데일리룸 PICK] 하찌 라운드 헤비 니트 풀오버 11 COLOR COOSKT066',
  price:62400,
  salePercent: 39
},
{
  id:5011,
  imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20230208/3070218/3070218_17585165674061_big.jpg?w=1000',
  name:'데님 원턱 와이드 팬츠 11 COLOR COOSPT201',
  price:55400,
  salePercent: 33
},
{
  id:5012,
  imageUrl:'https://image.msscdn.net/thumbnails/images/goods_img/20230208/3070234/3070234_17325163191564_big.jpg?w=1000',
  name:'원턱 와이드 카고 팬츠 20COLOR COOSPT200',
  price:133400,
  salePercent: 60
},
          ],
        },
        // 섹션 6: 주요 기획전
        exhibitions: [
          {
            id: 6001,
            title: '커스텀어클락 25FW 우먼',
            date: '25.09.28 - 25.10.13',
            products: [
              { id: 6101, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20230208/3070218/3070218_17585165674061_big.jpg?w=1000', name: '데님 원턱 와이드 팬츠 11 COLOR COOSPT201', price: 54000, salePercent: 15 },
              { id: 6102, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250929/5546699/5546699_17592000916295_big.jpg?w=1000', name: '[우먼] 벨티드 발마칸 롱 코트 블랙 COWCT001BLACK', price: 68000, salePercent: 20 },
              { id: 6103, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250929/5546673/5546673_17592115077622_big.jpg?w=1000', name: '[우먼] 벨티드 발마칸 롱 코트 오트밀 COWCT001OATMEAL', price: 159200, salePercent: 20 },
              { id: 6104, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250904/5402053/5402053_17576390386411_big.jpg?w=1000', name: '[예진 PICK] [우먼] 슬림 헨리넥 골지 니트 6 COLOR COWKT004', price: 68000, salePercent: 20 },
              { id: 6105, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250904/5402351/5402351_17574880491023_big.jpg?w=1000', name: '[예진 PICK] [우먼] 베이직 브이넥 골지 니트 8 COLOR COWKT001', price: 50000, salePercent: 20 },
              { id: 6106, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250826/5364501/5364501_17568050194549_big.jpg?w=1000', name: '[조유영 PICK] [우먼] 세미 부츠컷 슬랙스 블랙 COWPT001BLACK', price: 40800, salePercent: 27},
              { id: 6107, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250904/5402318/5402318_17574807049011_big.jpg?w=1000', name: '[연둡 PICK] [우먼] 베이직 라운드 골지 니트 8 COLOR COWKT002', price: 40800, salePercent: 27 },
              { id: 6108, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250904/5402427/5402427_17574840447383_big.jpg?w=1000', name: '[예진 PICK] [SET] [우먼] 베이직 가디건 골지 니트 세트 COWCDKTSET', price: 56000, salePercent: 50 },

            ],
          },
          {
            id: 6002,
            title: '커스텀 어클락 x 삭형',
            date: '25.10.01 - 25.10.16',
            products: [
               { id: 6201, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20230801/3440440/3440440_17585191785388_big.jpg?w=780', name: '[삭형 PICK] [2PACK] 소프트 베이직 가디건 COOSCD001CD020CD021', price:49900  , salePercent:  58},
               { id: 6202, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20240925/4461075/4461075_17278342434024_big.jpg?w=780', name: '[삭형 PICK] 울 블렌드 핸드 메이드 더블 코트 블랙 COOSCT025BLACK', price:124000 , salePercent: 50 },
               { id: 6203, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250915/5462355/5462355_17581881797561_big.jpg?w=780', name: '[삭형 PICK] 코튼 커브드 워시드 블루종 자켓 브라운 COOSJK042BROWN', price:86200 , salePercent:23  },
               { id: 6204, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250915/5462337/5462337_17581886038519_big.jpg?w=780', name: '[삭형 PICK] 코튼 커브드 워시드 블루종 자켓 네이비 COOSJK042NAVY', price:86200 , salePercent:  23},
               { id: 6205, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20240911/4433335/4433335_17592067605253_big.jpg?w=780', name: '[삭형 PICK] 커브드 기모 하프 집업 맨투맨 3 COLOR COOSTS261', price:43400 , salePercent: 30 },
               { id: 6206, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250915/5462316/5462316_17581888990796_big.jpg?w=780', name: '[삭형 PICK] 플레인 라운드 헤비 니트 풀오버 11 COLOR COOSKT067', price: 44200, salePercent: 33 },
               { id: 6207, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250204/4757327/4757327_17389077818389_big.jpg?w=780', name: '[삭형 PICK] 소프트 베이직 라운드 가디건 빈티지브라운 COOSCD020VBROWN', price: 39000, salePercent:34  },
               { id: 6208, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250821/5351750/5351750_17563436473643_big.jpg?w=780', name: '[삭형 PICK] 소프트 케이블 라운드 가디건 블랙 COOSCD021BLACK', price: 39000, salePercent: 34 },


            ],
          },
        ],
        // 섹션 7: 룩북
        lookbook: [
          { id: 7001, imageUrl: 'https://image.msscdn.net/cms/v2/content/meta_thumbnail_1758867489449.jpg', title: '단순함의 미학',content:'따뜻하고 단정하게, 오늘의 일상을 감싸주는 커스텀어클락의 새로운 시즌을 만나보세요.' ,date: '2025.09.30' },
          { id: 7002, imageUrl: 'https://image.msscdn.net/cms/v2/content/meta_thumbnail_1758678342414.jpg', title: '더 아트 오브 심플리시티',content:'섬세한 터치와 정제된 실루엣으로, 단순함 속에서 드러나는 본질의 아름다움이 도시의 일상에 여유와 품격을 더합니다. ', date: '2025.09.15' },
        ],
        // 섹션 8: 스냅
        snap: [
          { id: 8001, mainImageUrl:'https://image.msscdn.net/thumbnails/snap/images/2025/09/29/268eaac34b754eec8c08e8bf24f1b534.jpg',subImageUrl:'https://image.msscdn.net/images/goods_img/20250821/5351750/5351750_17563436473643_500.jpg', title: '[삭형 PICK] 소프트 케이블 라운드 가디건 블랙 COOSCD021BLACK', price: 39000, salePercent: 34 },
          { id: 8002, mainImageUrl: 'https://image.msscdn.net/thumbnails/snap/images/2025/09/29/f61fd6a9985341418f9e0eba85701785.jpg',subImageUrl:'https://image.msscdn.net/images/goods_img/20230801/3440440/3440440_17585191785388_500.jpg', title: '[삭형 PICK] [2PACK] 소프트 베이직 가디건 COOSCD001CD020CD021', price: 49900, salePercent:58  },
          { id: 8003, mainImageUrl: 'https://image.msscdn.net/thumbnails/snap/images/2025/09/29/fa4cefcd70344fd49f0514ad77851aba.jpg',subImageUrl:'https://image.msscdn.net/images/goods_img/20230208/3070218/3070218_17585165674061_500.jpg', title: 'alt="데님 원턱 와이드 팬츠 11 COLOR COOSPT201"', price:22050 , salePercent: 55 },
          { id: 8004, mainImageUrl: 'https://image.msscdn.net/thumbnails/snap/images/2025/09/29/786627eb844a49938c06c790ec072ba5.jpg',subImageUrl:'https://image.msscdn.net/images/goods_img/20250826/5366354/5366354_17568949894070_500.jpg', title: '[예진 PICK] [SET] [우먼] 포멀 플리츠 미디 스커트 레이어드 부츠컷 슬랙스 COWSK001PT001', price: 77250, salePercent:  44},
          { id: 8005, mainImageUrl: 'https://image.msscdn.net/thumbnails/snap/images/2025/09/29/098acab647624f1bb6c9374fbf171b3a.jpg',subImageUrl:'https://image.msscdn.net/images/goods_img/20250821/5351625/5351625_17563445662435_500.jpg', title: '소프트 케이블 라운드 가디건 오트밀 COOSCD021OATMEAL', price:44900 , salePercent:24  },
          { id: 8006, mainImageUrl: 'https://image.msscdn.net/thumbnails/snap/images/2025/09/29/3f17f63303334258ac1dafe8e26b8122.jpg',subImageUrl:'https://image.msscdn.net/images/goods_img/20250821/5351502/5351502_17561839545796_500.jpg', title: '루즈핏 플레어 슬랙스 블랙 COOSPT250BLACK', price: 53100, salePercent: 23 },
          { id: 8007, mainImageUrl: 'https://image.msscdn.net/thumbnails/snap/images/2025/09/29/c8024d8929a84c94815440188036800d.jpg',subImageUrl:'https://image.msscdn.net/images/goods_img/20250821/5351616/5351616_17561830984939_500.jpg', title: '루즈핏 플레어 데님 팬츠 블랙 COOSPT249BLACK', price:53100 , salePercent:  23},
          { id: 8008, mainImageUrl: 'https://image.msscdn.net/thumbnails/snap/images/2025/09/29/441ae80ddce0449a85962f825ef7ef7b.jpg',subImageUrl:'https://image.msscdn.net/images/goods_img/20250821/5351588/5351588_17561834859730_500.jpg', title: '루즈핏 플레어 데님 팬츠 블루 COOSPT249BLUE', price: 39900, salePercent: 42 },
          { id: 8009, mainImageUrl: 'https://image.msscdn.net/thumbnails/snap/images/2025/09/29/3cdbc71f79c442d6b49ac07e4d95c623.jpg',subImageUrl:'https://image.msscdn.net/images/goods_img/20250821/5351588/5351588_17561834859730_500.jpg', title: '루즈핏 플레어 데님 팬츠 블루 COOSPT249BLUE', price:39900 , salePercent: 42 },

        ],
        // 섹션 9: 전체 상품
        allProducts: [
          { id: 9001, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250929/5546699/5546699_17592000916295_big.jpg?w=260', name: '[우먼] 벨티드 발마칸 롱 코트 블랙 COWCT001BLACK', price: 49900, salePercent: 58, likes: 100, gender: '여성'},
          { id: 9002, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250929/5546686/5546686_17592006386099_big.jpg?w=260', name: '[우먼] 벨티드 발마칸 롱 코트 다크그레이 COWCT001DGRAY', price: 43400, salePercent: 30, likes: 80, gender: '남성'},
          { id: 9003, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250929/5546673/5546673_17592115077622_big.jpg?w=260', name: '[우먼] 벨티드 발마칸 롱 코트 오트밀 COWCT001OATMEAL', price: 159200, salePercent: 20, likes: 10, gender: '여성'},
          { id: 9004, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250922/5504973/5504973_17588692907304_big.jpg?w=260',name:'라이트웨이트 후드 덕다운 패딩 자켓 블랙 COOSJP051BLACK', price:99000 , salePercent:29 , likes: 16, gender: '남성'},
          { id: 9005, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250922/5504959/5504959_17588697490691_big.jpg?w=260',name:'라이트웨이트 후드 덕다운 패딩 자켓 라이트그레이 COOSJP051LGRAY', price: 99000, salePercent: 29, likes: 37, gender: '남성'},
          { id: 9006, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250922/5504951/5504951_17588700381555_big.jpg?w=260',name:'라이트웨이트 후드 덕다운 패딩 자켓 브라운 COOSJP051BROWN', price: 99000, salePercent: 29, likes:37 , gender: '남성'},

          { id: 9007, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250922/5504937/5504937_17588702953713_big.jpg?w=260',name:'라이트웨이트 후드 덕다운 패딩 자켓 글로시블랙 COOSJP051GLOSSYBK', price: 99000, salePercent:29 , likes: 13, gender: '남성'},
          { id: 9008, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250915/5462373/5462373_17586758213397_big.jpg?w=260',name:'코튼 커브드 워시드 블루종 자켓 블랙 COOSJK042BLACK', price: 78400, salePercent: 30, likes: 190, gender: '남성'},
          { id: 9009, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250915/5462355/5462355_17581881797561_big.jpg?w=260',name:'[삭형 PICK] 코튼 커브드 워시드 블루종 자켓 브라운 COOSJK042BROWN', price:86200 , salePercent:23 , likes:409 , gender: '남성'},
          { id: 9010, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250915/5462337/5462337_17581886038519_big.jpg?w=260',name:'[삭형 PICK] 코튼 커브드 워시드 블루종 자켓 네이비 COOSJK042NAVY', price: 86200, salePercent: 23, likes: 204, gender: '남성'},
          { id: 9011, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250915/5462316/5462316_17581888990796_big.jpg?w=260',name:'[삭형 PICK] 커브드 기모 하프 집업 맨투맨 3 COLOR COOSTS261', price:44200 , salePercent: 33, likes: 267, gender: '남성'},
          { id: 9012, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250915/5462299/5462299_17586872615776_big.jpg?w=260',name:'[삭형 PICK] 커브드 기모 후드 티셔츠 3 COLOR COOSTS262', price: 44200, salePercent:33 , likes:34 , gender: '남성'},

          { id: 9013, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250904/5402427/5402427_17574840447383_big.jpg?w=260',name:'[예진 PICK] [SET] [우먼] 베이직 가디건 골지 니트 세트 COWCDKTSET', price: 56000, salePercent: 50, likes: 143, gender: '여성'},
          { id: 9014, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250904/5402401/5402401_17574728522715_big.jpg?w=260',name:'[예진 PICK] [우먼] 베이직 브이넥 가디건 8 COLOR COWCD001', price:40800 , salePercent: 27, likes:225 , gender: '여성'},
          { id: 9015, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250904/5402377/5402377_17574784885486_big.jpg?w=260',name:'[연둡 PICK] [우먼] 베이직 라운드 가디건 8 COLOR COWCD002', price: 40800, salePercent: 27, likes: 106, gender: '여성'},
          { id: 9016, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250904/5402351/5402351_17574880491023_big.jpg?w=260',name:'[예진 PICK] [우먼] 베이직 브이넥 골지 니트 8 COLOR COWKT001', price:40800 , salePercent: 27, likes: 442, gender: '여성'},
          { id: 9017, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250904/5402318/5402318_17574807049011_big.jpg?w=260',name:'[연둡 PICK] [우먼] 베이직 라운드 골지 니트 8 COLOR COWKT002', price: 40800, salePercent: 27, likes: 428, gender: '여성'},
          { id: 9018, imageUrl: 'https://image.msscdn.net/thumbnails/images/goods_img/20250904/5402126/5402126_17574856632670_big.jpg?w=260',name:'[예진 PICK] [SET] [우먼] 슬림 골지 니트 세트 COWKT3456SET', price: 49000, salePercent: 50, likes: 150, gender: '여성'},


        ],
      },
    },
  
  ];
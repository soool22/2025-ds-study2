
// 가장 공통적으로 사용되는 제품 정보 구조
export interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  salePercent?: number; // 할인율은 선택적(optional)일 수 있습니다.
}

// 룩북 아이템 정보 구조
export interface LookbookItem {
  id: number;
  imageUrl: string;
  title: string;
  content:string;
  date: string;
}

// 스냅 아이템 정보 구조 (이미지가 2개인 경우)
export interface SnapItem {
  id: number;
  mainImageUrl: string;
  subImageUrl: string;
  title: string;
  price: number;
  salePercent?: number;
}

// '전체 상품' 섹션에서 사용될 확장된 제품 정보 구조
export interface FullProduct extends Product {
  likes: number;
  gender: '남성' | '여성' | '공용'; // 정해진 값만 사용하도록 제한합니다.
}


// --- 섹션별 타입 ---

// 섹션 1: 대표 상품군 정보 구조
export interface FeaturedItem {
  id: number;
  imageUrl: string;
  title: string;
}

// 섹션 5: 태그 섹션 정보 구조
export interface TagSection {
  tags: string[];
  products: Product[];
}

// 섹션 6: 주요 기획전 정보 구조
export interface Exhibition {
  id: number;
  title: string;
  date: string;
  products: Product[];
}


// --- 최상위 브랜드 타입 ---

// 브랜드의 기본 정보
export interface BrandInfo {
  name: string;
  englishName: string;
  likesCount: string; // '19.8만'과 같이 문자열이므로 string 타입으로 지정
  greeting: string;
  country: string;
  since: string;
  logoImageUrl: string;
}

// 브랜드 페이지 전체 데이터를 통합하는 최상위 구조
export interface Brand {
  id: number; // 브랜드 고유 ID
  info: BrandInfo;
  sections: {
    featured: FeaturedItem[];
    ranking: Product[];
    newArrivals: Product[];
    exclusive: Product[];
    tags: TagSection;
    exhibitions: Exhibition[];
    lookbook: LookbookItem[];
    snap: SnapItem[];
    allProducts: FullProduct[];
  };
}

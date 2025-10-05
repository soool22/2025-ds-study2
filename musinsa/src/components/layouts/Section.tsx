import React from 'react';
import * as M from '../../style/MainPageStyled';
// import HeartBtn from '../../img/heart.svg';

type Item = { brand: string; name: string; price: string; img: string; discount?: string; };

interface SectionProps {
  title: string;
  seeMoreText?: string;
  items: Item[];
  index: number;
}

export default function Section({ title, seeMoreText = "더보기", items, index }: SectionProps) {
  const displayedItems = index === 0 ? items.slice(0, 10) : items.slice(0, 20);


  const firstRow = displayedItems.slice(0, 10);
  const secondRow = displayedItems.slice(10, 20);

  return (
    <M.ItemMediumBox>
      <M.ItemBoxTitleBox>
        <M.ItemBoxTitle>{title}</M.ItemBoxTitle>
        <M.SeeMore>{seeMoreText}</M.SeeMore>
      </M.ItemBoxTitleBox>

      <M.ItemSmallBox style={{ flexWrap: 'nowrap', overflowX: 'auto', flexDirection: 'column' }}>
        <div style={{ display: 'flex' }}>
          {firstRow.map((item, idx) => (
            <M.ItemTinyBox key={idx}>
              <M.ItemImgPart bg={item.img} />
              <M.ItemInfoPart>
                <p>{item.brand}</p>
                <p className="name">{item.name}</p>
                <p>
                  {item.discount && (
                    <span style={{ color: 'red', marginRight: 6 }}>{item.discount}</span>
                  )}
                  {item.price}
                </p>
              </M.ItemInfoPart>
            </M.ItemTinyBox>
          ))}
        </div>

        {index !== 0 && (
          <div style={{ display: 'flex' }}>
            {secondRow.map((item, idx) => (
              <M.ItemTinyBox key={idx}>
                <M.ItemImgPart bg={item.img}>
                    {/* <M.HeartButton>
                        <M.HeartButtonImg src={HeartBtn} />
                    </M.HeartButton> */}
                </M.ItemImgPart>
                <M.ItemInfoPart>
                  <p>{item.brand}</p>
                  <p className="name">{item.name}</p>
                  <p>
                    {item.discount && (
                      <span style={{ color: 'red', marginRight: 6 }}>{item.discount}</span>
                    )}
                    {item.price}
                  </p>
                </M.ItemInfoPart>
              </M.ItemTinyBox>
            ))}
          </div>
        )}
      </M.ItemSmallBox>
    </M.ItemMediumBox>
  );
}
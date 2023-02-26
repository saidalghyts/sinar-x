import './card.module.css';
import { useState, useEffect } from 'react';
import style from './card.module.css';
import Link from 'next/link';

interface SuratData {
  data: {
    namaLatin: string;
    nomor: number;
  }[];
}

export default function Card() {
  const [datas, setDatas] = useState<SuratData>({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://equran.id/api/v2/surat');
      const json = await res.json();
      setDatas(json);
    };

    fetchData();
  }, []);
  return (
    <div className={style.container}>
      {datas.data.map((x) => (
        <div className={style.item}>
          <Link href={'/' + x.namaLatin.toLowerCase()}>{x.namaLatin}</Link>
        </div>
      ))}
    </div>
  );
}

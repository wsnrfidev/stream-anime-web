"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from 'swiper/modules';
import styles from "./component.module.css"
import Image from 'next/image';
import Link from 'next/link';
import { News } from '@/app/ts/interfaces/newsInterface';

function SwiperContainer({ data, options }: {
    data?: News[],
    options?: {
        slidesPerView?: number
        bp480: number,
        bp740: number,
        bp1275: number,
    }
}) {

    return (
        <Swiper
            className={styles.list_container}
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={options?.slidesPerView || 3.2}
            spaceBetween={16}
            breakpoints={{
                480: { slidesPerView: options?.bp480 || 4 },
                740: { slidesPerView: options?.bp740 || 5 },
                1275: { slidesPerView: options?.bp1275 || 6 },
            }}
        >

            {data?.map((item, key: number) => (

                <SwiperSlide key={key} className={styles.custom_list_item} role="listitem">

                    <div className={styles.news_container}>

                        <div className={styles.img_container}>
                            <Image fill src={item.thumbnail} alt={item.title} />
                        </div>

                        <div className={styles.title_container}>

                            <Link className={styles.topic} href={`/news?topic=${item.topics[0]}`}>{item.topics[0].toUpperCase()}</Link>

                            <h3><Link href={`news/${item.id.replace(/\/?daily-briefs\//, "")}`}>{item.title}</Link></h3>

                        </div>
                    </div>
                </SwiperSlide>

            ))}

        </Swiper>
    );
}

export default SwiperContainer
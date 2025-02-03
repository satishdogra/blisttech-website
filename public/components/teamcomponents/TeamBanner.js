import React from 'react';
import styles from './TeamBanner.module.css';
import Image from 'next/image';

export default function TeamBanner() {
  return (
    <>
      <div className={styles.teamBanner}>
        <div className="banner">
              <Image src="/images/team/Banner/team.jpg" alt="Description of the image" width={1349} height={345} />
      </div>
      </div>
    </>
  )
}

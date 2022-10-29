import React, {useState} from 'react';
import styles from './Gallary.module.css';

interface GallaryProps {
  images: string[],
}



const Gallary: React.FC<GallaryProps> = ({images}) => {
const [MainImage, setMainImage] = useState<string>(images[0]);

const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  event.preventDefault();
  const id : any = event.currentTarget;
  var src : string = id.firstChild.attributes['src'].nodeValue;
  console.log(src);
  
  setMainImage(src)
  
}



  return (
    <div className={styles['gallary']}>
        <div className={styles['main-image']}>
          <img src={MainImage} alt='MainImage'/>
        </div>
        <div className={styles['image-options']}>
            { 
            images.map((file,id) => (
              <div onClick={(event)=>handleClick(event)} key={id} className={styles['image']}>
                <img src={file} alt='ProductImages'/>
              </div>
            ))
            }
        </div>
    </div>
  )
}

export default Gallary;
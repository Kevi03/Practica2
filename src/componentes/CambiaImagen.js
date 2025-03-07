import React, { useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from '../estilos/style';

function CambiaImagen({ image1, image2 }) {
  const [actual, setActual] = useState(image1);

  const handlePress = () => {
    setActual(actual === image1 ? image2 : image1);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image source={actual} style={styles.cambiaImagen} />
    </TouchableOpacity>
  );
}

export default CambiaImagen;

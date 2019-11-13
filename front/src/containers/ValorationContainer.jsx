/**40- Como usuario no logueado quiero poder ver la valoración
 *  de cada producto para conocer la opinión de otros
 * compradores del producto
 *
 * Deben verse el 5-star rating promedio
 * ver todos los comentarios
 */

import React from "react";
import Valoration from "../components/Valoration";

class ValorationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Valoration comments={this.props.comments} />
      </div>
    );
  }
}
export default ValorationContainer;

import React from "react";
import PropTypes from "prop-types";
import { Styled } from "./GalleryHeaderStyles";

const GalleryHeader = () => (
  <Styled>
    <section>
      <div className="gallery-header-container">
        <h2>Azul</h2>
        <p>
          Optei por criar essa série para remeter a solidão e tristeza que essa
          quarentena trouxe. Me manter bem nesse momento é muito difícil, mas
          espero que as coisas melhorem. Nada parece que será como antes. Todos
          os planos tiveram que ser novamente planejados e os sonhos devem ser
          sonhados novamente. A cor azul toma conta do ambiente e de mim.{" "}
        </p>
      </div>
    </section>
  </Styled>
);

export default GalleryHeader;

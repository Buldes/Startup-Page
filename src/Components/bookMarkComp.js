import React from 'react';
import { LinkButton } from './LinkButtons';
import { centering } from '../Styles/Look';
import { bookMarks } from '../variables/dictionary';

export function BokMarkComp() {
  const links = bookMarks;
  const linkGroups = [];
  let currentGroup = [];

  // Durchlaufen der Links und Aufteilen in Gruppen von maximal 3 Links
  links.forEach((link, index) => {
    currentGroup.push(<LinkButton key={index} autoIcon text={link.name} url={link.url} />);

    // Wenn die aktuelle Gruppe 3 Links erreicht hat oder es der letzte Link ist
    if (currentGroup.length === 3 || index === links.length - 1) {
      linkGroups.push(
        <div key={linkGroups.length} style={{ display:"flex", flexDirection:"row", top:100, position:"relative", ...centering }}>
          {currentGroup}
        </div>
      );

      currentGroup = []; // Leere die aktuelle Gruppe
    }
  });

  return <div>{linkGroups}</div>;
}


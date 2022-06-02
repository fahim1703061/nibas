import React, { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion'

function FAQs({data}) {
  return (
    <div>
        <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{data[0].title}</Accordion.Header>
                    <Accordion.Body>
                        {data[0].content}
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>{data[1].title}</Accordion.Header>
                    <Accordion.Body>
                        {data[1].content}

                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

    </div>
  )
}

export default FAQs;
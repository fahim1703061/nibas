import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
// import Faq from "react-faq-component";
const data = [
    {
        title: "How to rent a home",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
        title: "How to sell my home",
        content:
            "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
        title: "What is the package version",
        content: <p>current version is 1.2.1</p>,
    },
]


// const styles = {
//     // bgColor: 'white',
//     titleTextColor: "blue",
//     rowTitleColor: "blue",
//     // rowContentColor: 'grey',
//     // arrowColor: "red",
// };

// const config = {
//     // animate: true,
//     // arrowIcon: "V",
//     // tabFocus: true
// };



function FAQs() {
    return (
        <div style={{ width: "50%", margin: "auto" }}>
            <h2>FAQs</h2>
            <hr/>
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
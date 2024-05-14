// Render Delegation
function Accordion({ children, ...props }) {
    return (
      <div className="accordion" {...props}>
        {children}
      </div>
    );
  }
  
  // 사용 예시
  function App() {
    return (
      <Accordion>
        <AccordionItem title="Section 1">
          <p>Content for Section 1</p>
        </AccordionItem>
        <AccordionItem title="Section 2">
          <p>Content for Section 2</p>
        </AccordionItem>
      </Accordion>
    );
  }
  
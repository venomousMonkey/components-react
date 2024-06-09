import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: '1',
      label: 'can I use react ?',
      content: 'just use whatever',
    },
    {
      id: '2',
      label: 'can I use JS ?',
      content: 'just use whatever',
    },
    {
      id: '3',
      label: 'can I use Vue ?',
      content: 'just use whatever',
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;

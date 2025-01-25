import React from 'react';
import Card from './components/Card/index.tsx';
import Carousel from './components/Carousel/index.tsx';
import Chip from './components/Chip/index.tsx';

const App = () => {
  const items = [
    <Card title='Salmon' key={1} price={12} image='https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg' description='200 gr Salmon' onClick={() => {}} />,
    <Card title='Chicken' key={2} price={10} image='https://images.immediate.co.uk/production/volatile/sites/30/2021/08/One-pot-spiced-roast-chicken-05079e9.jpg?quality=90&resize=556,505' description='200 gr Chicken' onClick={() => {}} />,
    <Card title='Meat' key={3} price={20} image='https://media.istockphoto.com/id/1358009037/photo/sliced-and-grilled-rib-eye-steak-rib-eye-beef-marbled-meat-on-a-wooden-board-wooden.jpg?s=612x612&w=0&k=20&c=wWPGdYCC0JiQzvzfrnDvGDZEXXuI5prsN-riMqd_vLE=' description='200 gr meat' onClick={() => {}} />,
    <Card title='tupu' key={4} price={5} image='https://media.istockphoto.com/id/523444303/photo/organic-raw-soy-tofu.jpg?s=612x612&w=0&k=20&c=9tNfjfJVBBPa3pO81UAShHWWEIpBGVAHYOwCAyNlYpQ=' description='200 gr meat' onClick={() => {}} />,
    <Card title='vegi' key={5} price={2} image='https://images.unsplash.com/photo-1598449426314-8b02525e8733?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZlZ2V0YXJpYW4lMjBmb29kfGVufDB8fDB8fHww' description='200 gr vegi' onClick={() => {}} />,
    <Card title='apple' key={6} price={1} image='https://www.shutterstock.com/image-photo/green-red-apples-fruit-bowl-600nw-2320727429.jpg' description='200 gr apples' onClick={() => {}} />,
  ];
   
  const chips = [
      <Chip title='alcohol' image='https://cdn-eu.dynamicyield.com/api/9879135/images/2beac5d9aa58d__.png'/>,
      <Chip title='bread' image='https://cdn-eu.dynamicyield.com/api/9879135/images/1b70aa7eb3b55__.png'/>,
      <Chip title='meat' image='https://cdn-eu.dynamicyield.com/api/9879135/images/26f2bbb286902__.png'/>,
      <Chip title='cold food' image='https://cdn-eu.dynamicyield.com/api/9879135/images/246cb50450fc4__.png'/>,
      <Chip title='vegetables' image='https://cdn-eu.dynamicyield.com/api/9879135/images/1f189c08770fd__.png'/>,
      <Chip title='animals' image='https://cdn-eu.dynamicyield.com/api/9879135/images/1be89f2ee5932__.png'/>,
      <Chip title='babies' image='https://cdn-eu.dynamicyield.com/api/9879135/images/19c974b8981ed__a32.png'/>,
  ];

  return (
      <Carousel>
        {items}
        {/* {chips} */}
      </Carousel>
  );
}

export default App;

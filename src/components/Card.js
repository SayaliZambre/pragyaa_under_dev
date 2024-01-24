// import React from 'react';
// import "./Card.css";
// // import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
// // import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
// // import { projects } from '../../constants/constants';
// const { useState, useEffect, useRef } = React;
// const { createRoot } = ReactDOM;

// const cards = [
//   {
//     image: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     title: 'Iceland',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     button: 'Book Now'
//   },
//   {
//     image: 'https://images.pexels.com/photos/1559908/pexels-photo-1559908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     title: 'Portugal',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     button: 'Book Now'
//   },
//   {
//     image: 'https://images.pexels.com/photos/2032332/pexels-photo-2032332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     title: 'Austria',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     button: 'Book Now'
//   },
//   {
//     image: 'https://images.pexels.com/photos/126292/pexels-photo-126292.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     title: 'Czechia',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     button: 'Book Now'
//   },
//   {
//     image: 'https://images.pexels.com/photos/13787796/pexels-photo-13787796.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     title: 'Finland',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     button: 'Book Now'
//   },
//   {
//     image: 'https://images.pexels.com/photos/1680381/pexels-photo-1680381.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     title: 'Norway',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     button: 'Book Now'
//   }
// ]

// const Card = ({image, title, text, button}) => {
//   return (    
//     <a href="#" className="card">
//       <div className="card__image">
//         <img src={image} alt={title} />
//       </div>
//       <h2 className="card__title">{title}</h2>
//       <div className="card__content">
//         <p>{text}</p>
//         <span>
//           {button}
//           <i className="fa-solid fa-plane-departure" />
//         </span>
//       </div>
//     </a>
//   )
// }

// const DarkMode = ({theme, setTheme}) => {
//   const toggleTheme = () => {
//     theme === 'theme-light' ? setTheme('theme-dark') : setTheme('theme-light')
//   }
  
//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//     document.body.className = theme;
//   }, [theme]);
  
//   return (
//     <button className="dark-mode" onClick={toggleTheme}>
//       <span>Toggle { theme === 'theme-light' ? 'Dark Mode' : 'Light Mode'}</span>
//       {/* <span>{ theme === 'theme-light' ? '☀️' : '🌕'}</span> */}
//     </button>
//   )
// }

// const Header = () => {
//   const [theme, setTheme] = useState(
//     localStorage.getItem('theme') || 'theme-light'
//   );
  
//   return (
//     <header className="header">
//       <div className="grid-container">
//         <div className="grid-x align-justify align-middle">
//           <div className="cell">
//             <h1 classNamer="page-title">
//               React Card Component w/ Animation & Dark Mode
//             </h1>
//           </div>
//           <div className="cell">
//             <DarkMode theme={theme} setTheme={setTheme} />
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// const App = () => {
  
//   return (
//     <>
//       <Header />
//       <div className="grid-container">
//         <div className="grid-x grid-padding-x grid-margin-y">
//           {cards.map((card,index) => (
//             <div className="cell medium-4">
//               <Card
//                 image={card.image}
//                 title={card.title}
//                 text={card.text}
//                 button={card.button}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// root.render(<App />);

  
//   const DarkMode = ({theme, setTheme}) => {
//     const toggleTheme = () => {
//       theme === 'theme-light' ? setTheme('theme-dark') : setTheme('theme-light')
//     }
    
//     useEffect(() => {
//       localStorage.setItem('theme', theme);
//       document.body.className = theme;
//     }, [theme]);
    
//     return (
//       <button className="dark-mode" onClick={toggleTheme}>
//         <span>Toggle { theme === 'theme-light' ? 'Dark Mode' : 'Light Mode'}</span>
//         {/* <span>{ theme === 'theme-light' ? '☀️' : '🌕'}</span> */}
//       </button>
//     )
//   }
  
//   const Header = () => {
//     const [theme, setTheme] = useState(
//       localStorage.getItem('theme') || 'theme-light'
//     );
    
//     return (
//       <header className="header">
//         <div className="grid-container">
//           <div className="grid-x align-justify align-middle">
//             <div className="cell">
//               <h1 classNamer="page-title">
//                 React Card Component w/ Animation & Dark Mode
//               </h1>
//             </div>
//             <div className="cell">
//               <DarkMode theme={theme} setTheme={setTheme} />
//             </div>
//           </div>
//         </div>
//       </header>
//     )
//   }
  
//   const App = () => {
    
//     return (
//       <>
//         <Header />
//         <div className="grid-container">
//           <div className="grid-x grid-padding-x grid-margin-y">
//             {cards.map((card,index) => (
//               <div className="cell medium-4">
//                 <Card
//                   image={card.image}
//                   title={card.title}
//                   text={card.text}
//                   button={card.button}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </>
//     );
//   };
  
//   const rootElement = document.getElementById("root");
//   const root = createRoot(rootElement);
//   root.render(<App />);
  

// );

// export default Card;
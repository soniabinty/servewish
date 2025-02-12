
import Count from '../componant/Count';
import Features from '../componant/Features';
;
import Banner from '../componant/Banner';
import Partner from '../componant/Partner.JSX';
import Category from '../componant/Category';
import NewReview from '../componant/NewReview';



const Home = () => {

  return (
    <div >
     <Banner></Banner>
     <Features></Features>
     <Category></Category>
 <NewReview></NewReview>
    <Partner></Partner>
       <Count></Count>
    </div>
  );
};

export default Home;
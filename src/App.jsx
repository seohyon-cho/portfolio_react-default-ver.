import './globalStyles/Variables.scss';
import './globalStyles/Reset.scss';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { useMedia } from './hooks/useMedia';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import MainWrap from './components/main/MainWrap';
import Department from './components/sub/department/Department';
import Youtube from './components/sub/youtube/Youtube';
import Gallery from './components/sub/gallery/Gallery';
import Community from './components/sub/community/Community';
import Members from './components/sub/members/Members';
import Contact from './components/sub/contact/Contact';
import { useEffect, useState } from 'react';
import Detail from './components/sub/youtube/Detail';
import Menu from './components/common/menu/Menu';
import { useDispatch } from 'react-redux';
import * as types from './redux/actionType';

export default function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: types.MEMBERS.start });
		dispatch({ type: types.HISTORY.start });
		dispatch({ type: types.YOUTUBE.start });
		dispatch({ type: types.FLICKR.start });
	}, [dispatch]);

	const [Dark, setDark] = useState(false);

	return (
		<div className={`wrap ${Dark ? 'dark' : ''} ${useMedia()}`}>
			<Header Dark={Dark} setDark={setDark} />
			<Route exact path='/' component={MainWrap} />
			<Route path='/department' component={Department} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/detail/:id' component={Detail} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/community' component={Community} />
			<Route path='/members' component={Members} />
			<Route path='/contact' component={Contact} />
			<Footer />
			<Menu />
		</div>
	);
}

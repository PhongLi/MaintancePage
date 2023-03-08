import { useEffect, useState } from 'react';
import './App.css';
import { emailIcon, phoneIcon, wichart, wigroup } from './assets/images';
import { BsArrowRight } from 'react-icons/bs';
import Countdown from 'react-countdown';
import { ContactWrapper, Description, Logos, StyledContainer, Timer, Title } from './components/styled.jsx';
import axios from 'axios';

function App() {
    const [expiredTime, setExpiredTime] = useState('');

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axios.get('https://safedata.vn/baotri.php');
                setExpiredTime(new Date(res.data));
            } catch (err) {
                console.log(err);
            }
        };

        fetchApi();
    }, []);
    const currentTime = new Date();

    const remainingTime = Math.abs(expiredTime - currentTime);

    const padWithLeadingZeros = (num, totalLength) => {
        return String(num).padStart(totalLength, '0');
    };
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a complete state
            return <h1>Vui lòng chờ trong giây lát!</h1>;
        } else {
            // Render countdown
            return (
                <Timer>
                    <div className="wrapper">
                        <p className="timer-num">{padWithLeadingZeros(hours, 2)}</p>
                        <div className="timer-label">giờ</div>
                    </div>
                    <div className="wrapper">
                        <p className="timer-num">{padWithLeadingZeros(minutes, 2)}</p>
                        <div className="timer-label">phút</div>
                    </div>
                    <div className="wrapper">
                        <p className="timer-num">{padWithLeadingZeros(seconds, 2)}</p>
                        <div className="timer-label">giây</div>
                    </div>
                </Timer>
            );
        }
    };

    return (
        <div className="App">
            <StyledContainer>
                <Logos>
                    <img src={wigroup} alt="wigroup" className="wigroupIcon" />
                    <img src={wichart} alt="wichart" className="wichartIcon" />
                </Logos>
                <div>
                    <Title>nâng cấp hệ thống</Title>
                    <Description>
                        <span>
                            Chúng tôi đang thực hiện bảo trì, nâng cấp hệ thống để mang lại trải nghiệm sử dụng sản phẩm
                            tốt nhất cho khách hàng WiChart.
                        </span>
                        <span>Wichart rất xin lỗi bạn vì sự bất tiện này.</span>
                    </Description>
                    <p className="timer-title">Thời gian dự kiến:</p>
                    {<Countdown date={Date.now() + (remainingTime || 2000)} renderer={renderer} />}
                    <div>
                        <a href="https://www.wigroup.vn/" className="more-info">
                            <span>Xem thêm các sản phẩm khác của chúng tôi</span>
                            <BsArrowRight className="arrow-icon" style={{ fontSize: '18px' }} />
                        </a>
                    </div>
                    <ContactWrapper>
                        <p>Nếu bạn cần sự hỗ trợ gấp xin liên hệ:</p>
                        <div className="contact">
                            <img src={emailIcon} alt="email" />
                            <p>admin@wigroup.vn</p>
                        </div>
                        <div className="contact">
                            <img src={phoneIcon} alt="phone" />
                            <p>0862 04 04 39</p>
                        </div>
                    </ContactWrapper>
                </div>
            </StyledContainer>
        </div>
    );
}

export default App;

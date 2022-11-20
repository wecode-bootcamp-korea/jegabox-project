import '../../../components/ResetSubin.scss';
import css from './GlassDropdown.module.scss';
import React, { useState } from 'react';

import { BiSearch } from 'react-icons/bi';

const GlassDropdown = () => {
  const [changePhoto1, setChangePhoto1] = useState('');
  const [changeValidPhoto1, setValidPhoto1] = useState(false);
  const [changePhoto2, setChangePhoto2] = useState('');
  const [changeValidPhoto2, setValidPhoto2] = useState(false);
  const [changePhoto3, setChangePhoto3] = useState('');
  const [changeValidPhoto3, setValidPhoto3] = useState(false);
  const [changePhoto4, setChangePhoto4] = useState('');
  const [changeValidPhoto4, setValidPhoto4] = useState(false);
  const [changePhoto5, setChangePhoto5] = useState('');
  const [changeValidPhoto5, setValidPhoto5] = useState(false);
  function ChangePoster1() {
    setValidPhoto1(true);
    setChangePhoto1(100);
    setChangePhoto2(0);
    setChangePhoto3(0);
    setChangePhoto4(0);
    setChangePhoto5(0);
  }
  function ChangePoster2() {
    setValidPhoto2(true);
    setChangePhoto1(0);
    setChangePhoto2(100);
    setChangePhoto3(0);
    setChangePhoto4(0);
    setChangePhoto5(0);
  }
  function ChangePoster3() {
    setChangePhoto1(0);
    setChangePhoto2(0);
    setChangePhoto3(100);
    setChangePhoto4(0);
    setChangePhoto5(0);
    setValidPhoto3(true);
  }
  function ChangePoster4() {
    setChangePhoto1(0);
    setChangePhoto2(0);
    setChangePhoto3(0);
    setChangePhoto4(100);
    setChangePhoto5(0);
    setValidPhoto4(true);
  }
  function ChangePoster5() {
    setChangePhoto1(0);
    setChangePhoto2(0);
    setChangePhoto3(0);
    setChangePhoto4(0);
    setChangePhoto5(100);
    setValidPhoto5(true);
  }
  return (
    <div className={css.outColor}>
      <div className={css.wholeSearch}>
        <div className={css.rankingName}>
          <div className={`${css.searchTitle} ${css.underlineChange}`}>
            메가박스 관객순
          </div>
          <div className={css.searchTitle}>예매율 순</div>
        </div>
        <div className={css.searchMainColumn}>
          <div className={css.moviePoster}>
            <img
              style={{ zIndex: changeValidPhoto1 && changePhoto1 }}
              className={css.moviePoster1}
              src="https://ifh.cc/g/nXhvPa.jpg"
            />
            <img
              style={{ zIndex: changeValidPhoto2 && changePhoto2 }}
              className={css.moviePoster2}
              src="https://ifh.cc/g/dPlvQO.png"
            />
            <img
              style={{ zIndex: changeValidPhoto3 && changePhoto3 }}
              className={css.moviePoster3}
              src="https://ifh.cc/g/KFgLVJ.png"
            />
            <img
              style={{ zIndex: changeValidPhoto4 && changePhoto4 }}
              className={css.moviePoster4}
              src="https://ifh.cc/g/Tf92LH.jpg"
            />
            <img
              style={{ zIndex: changeValidPhoto5 && changePhoto5 }}
              className={css.moviePoster5}
              src="https://ifh.cc/g/mmDW5z.jpg"
            />
          </div>
          <div className={css.movieRanking}>
            <span
              onMouseOver={ChangePoster1}
              className={`${css.movieName} ${css.show1}`}
            >
              <span className={`${css.nameNumber} `}>1</span>
              블랙팬서:와칸다 포에버
            </span>
            <span
              className={`${css.movieName} ${css.show2}`}
              onMouseOver={ChangePoster2}
            >
              <span className={css.nameNumber}>2</span>
              데시벨
            </span>
            <span
              className={`${css.movieName} ${css.show3}`}
              onMouseOver={ChangePoster3}
            >
              <span className={css.nameNumber}>3</span>동감
            </span>
            <span
              className={`${css.movieName} ${css.show4}`}
              onMouseOver={ChangePoster4}
            >
              <span className={css.nameNumber}>4</span>올빼미
            </span>
            <span
              onMouseOver={ChangePoster5}
              className={`${css.movieName} ${css.show5}`}
            >
              <span className={css.nameNumber}>5</span>폴:600미터
            </span>
          </div>
          <div className={css.searchBar}>
            <input placeholder="영화를 검색하세요"></input>
            <BiSearch className={css.searchIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassDropdown;
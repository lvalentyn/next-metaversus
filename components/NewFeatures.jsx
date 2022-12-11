import styles from '../styles';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div
    className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]"
  >
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}>
      <img className="w-1/2 h-1/2 object-contain" src={imgUrl} alt="icon" />
    </div>
    <h3 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">Title {title}</h3>
    <p className="flex-1 mt-[16px] font-normal text-[18px] leading-[32px] text-[#B0B0B0]">{subtitle}</p>
  </div>
);

export default NewFeatures;

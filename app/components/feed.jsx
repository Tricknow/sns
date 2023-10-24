import { Menu } from "../icons/Menu";
import { Heart } from "../icons/heart";
import { Reply } from "../icons/Reply"
import { Dm } from "../icons/DM";
import { Favorite } from "../icons/Favorite";

export const Feed = () => {
  return (
    <div className="w-[400px] bg-white">
      <div id="header" className="flex items-center justify-between p-2">
        {/* profile */}
        <div className="flex items-center ">
          <div
            className="rounded-full w-10 h-10
           bg-[url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')]
           bg-contain mr-2"
          />
          <div>
            <div className="font-semibold">Frontman</div>
            <div className="font-light">ChungNam</div>
          </div>
        </div>
        {/* 더보기 버튼 */}
        <div>
          <Menu />
        </div>
      </div>
      <div id="content" className="w-[400px] h-[400px]">
        {/* 이미지 */}
            <img
                className="object-cover w-[396px] h-[396x]"
                src="https://www.cbc.ca/kids/images/halloween_trickortreat.jpg"
                alt="img"
            />
        </div>
      <div id="footer">
        {/** 좋아요버튼, 댓글버튼, DM버튼 */}
        <div id="header" className="flex items-center justify-between p-2">
            <div className="flex items-center w-1/4 justify-around">
            <Heart />
            <Reply />
            <Dm />
            </div>
            {/** 저장 버튼 */}
            <div>
            <Favorite />
            </div>
        </div>        
      </div>
      <div id="comments">
        {/* 누가 좋아요했는지 + 좋아요한 사람의 수 */}
            <div>
                Liked by <b>{40} others</b>
            </div>
            <div>
                <b>Frontman</b> Happy Halloween!
            </div>
        {/* 내가 작성한 컨텐츠의 글 */}
        {/* 댓글들 */}
      </div>
    </div>
  );
};
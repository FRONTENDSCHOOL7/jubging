import baseprofile from "../../assets/images/base-profile.webp";
import {
  Maindiv,
  ProfileLink,
  ImageDiv,
  Section,
  UserName,
  SubText,
} from "./UserListBoxStyle";

export default function UserListBox({
  profileImage,
  userName,
  accountName,
  inputTxt = "",
}) {
  const numberRegex =
    /^https:\/\/api\.mandarin\.weniv\.co\.kr\/(?:(?!null|undefined)[\w.]*)$/;

  return (
    <ProfileLink to={`/profile/${accountName}`}>
      <Maindiv>
        <ImageDiv>
          <img
            src={numberRegex.test(profileImage) ? profileImage : baseprofile}
            alt="프로필 이미지"
          />
        </ImageDiv>
        <Section>
          <UserName>
            {userName &&
              userName
                .split(new RegExp(`(${inputTxt})`, "i"))
                .map((part, index) =>
                  part.toLowerCase() === inputTxt.toLowerCase() ? (
                    <span key={index} style={{ color: "#40A6DE" }}>
                      {part}
                    </span>
                  ) : (
                    <span key={index}>{part}</span>
                  )
                )}
          </UserName>
          <SubText>
            @
            {accountName &&
              accountName
                .split(new RegExp(`(${inputTxt})`, "i"))
                .map((part, index) =>
                  part.toLowerCase() === inputTxt.toLowerCase() ? (
                    <span key={index} style={{ color: "#40A6DE" }}>
                      {part}
                    </span>
                  ) : (
                    <span key={index}>{part}</span>
                  )
                )}
          </SubText>
        </Section>
      </Maindiv>
    </ProfileLink>
  );
}

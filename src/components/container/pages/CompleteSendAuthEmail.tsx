import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Paper as MuiPaper } from "@mui/material";
import MuiEmailIcon from "@mui/icons-material/Email";
import { makeStyles } from "@mui/styles";

import { MuiTheme } from "../../../assets/material-ui";
import { firebaseSendSignInLinkToEmail } from "../../../operation/userAuth";
import { BasicTypography, HistoryBackLink, PrimaryButton } from "../../presentational/atoms";
import { BasicTypographyWithIcon } from "../../presentational/molecules";
import { LogoOnlyHeader } from "../organisms";
import { Container } from "../layout";

const useStyles = makeStyles({
  pcLoginForm: {
    display: "none",
    [MuiTheme.breakpoints.up("sm")]: {
      display: "block",
      padding: "64px",
      width: "80%",
      margin: "0 auto",
    },
  },
});

const CompleteSendEmailAuth: FC = () => {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  // 認証メールの再送信の処理
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (email) {
      // 認証メールを送信
      await dispatch(firebaseSendSignInLinkToEmail(email));
      setErrorMessage(false);
    } else {
      // エラーメッセージを表示
      setErrorMessage(true);
    }
  };

  // ローカルストレージからメールアドレスを取得し、stateに保存する
  useEffect(() => {
    const localStorageEmail = window.localStorage.getItem("emailForSignIn");
    if (localStorageEmail) {
      setEmail(localStorageEmail);
    }
  }, []);

  return (
    <>
      <LogoOnlyHeader />
      <Container padding="64px 8px">
        {/****** PC, タブレット *******/}
        <MuiPaper className={classes.pcLoginForm} elevation={8}>
          {errorMessage ? (
            <>
              <BasicTypographyWithIcon
                text="再送信エラー"
                color="#555"
                component="h1"
                variant="h4"
                icon={MuiEmailIcon}
                iconColor="#555"
                iconSize="32px"
                letterSpacing="3px"
                spacing="xs"
                justify="center"
                alignItems="center"
                margin="0 0 32px"
              />
              <BasicTypography align="center" component="p" variant="body1" color="#b2102f">
                ※認証メールの再送信に失敗しました。
              </BasicTypography>
              <BasicTypography align="center" component="p" variant="body1">
                お手数ですが、以下のリンクより再度メール認証からお願い致します。
              </BasicTypography>
              <div className="h-module-spacer--md" />
              <HistoryBackLink
                text="認証メール送信画面へ"
                color="#fff"
                background="#8bd5da"
                fullWidth
                path="./email-authentication"
                align="center"
                padding="8px 16px"
                radius="4px"
              />
            </>
          ) : (
            <>
              <BasicTypographyWithIcon
                text="送信完了"
                color="#555"
                component="h1"
                variant="h4"
                icon={MuiEmailIcon}
                iconColor="#555"
                iconSize="32px"
                letterSpacing="3px"
                spacing="xs"
                justify="center"
                alignItems="center"
                margin="0 0 32px"
              />
              <BasicTypography align="center" component="p" variant="body1">
                {email} に認証メールを送信しました。
              </BasicTypography>
              <BasicTypography align="center" component="p" variant="body1">
                メール記載のリンクよりアカウントの作成をお願い致します。
              </BasicTypography>
              <BasicTypography align="center" component="p" variant="body1">
                メールが届いていない場合は、迷惑メールなどをご確認の上、以下のボタンより再送信をお試しください。
              </BasicTypography>
              <div className="h-module-spacer--md" />
              <form onSubmit={handleSubmit}>
                <PrimaryButton text="認証メールを再送信" color="#fff" background="#8bd5da" fullWidth />
              </form>
              <div className="h-module-spacer--md" />
              <HistoryBackLink path="./login" text="ログイン画面に戻る" align="right" color="#666" fontSize="14px" />
            </>
          )}
        </MuiPaper>

        {/****** スマホ ******/}
        <StyledSpContainer>
          {errorMessage ? (
            <>
              <BasicTypographyWithIcon
                text="再送信エラー"
                color="#555"
                component="h1"
                variant="h4"
                fontWeight="600"
                icon={MuiEmailIcon}
                iconColor="#555"
                iconSize="32px"
                letterSpacing="3px"
                spacing="xs"
                justify="center"
                alignItems="center"
                margin="0 0 32px"
              />
              <BasicTypography align="center" component="p" variant="body1" color="#b2102f">
                ※認証メールの再送信に失敗しました。
              </BasicTypography>
              <div className="h-module-spacer--xs" />
              <BasicTypography align="center" component="p" variant="body1">
                お手数ですが、以下のリンクより再度メール認証からお願い致します。
              </BasicTypography>
              <div className="h-module-spacer--md" />
              <HistoryBackLink
                text="認証メール送信画面へ"
                color="#fff"
                background="#8bd5da"
                fullWidth
                path="./email-authentication"
                align="center"
                padding="8px 16px"
                radius="4px"
              />
            </>
          ) : (
            <>
              <BasicTypographyWithIcon
                text="送信完了"
                color="#555"
                component="h1"
                variant="h4"
                icon={MuiEmailIcon}
                iconColor="#555"
                iconSize="32px"
                spacing="xs"
                letterSpacing="3px"
                fontWeight="600"
                justify="center"
                alignItems="center"
                margin="0 0 32px"
              />
              <BasicTypography align="center" component="p" variant="body1">
                {email} に認証メールを送信しました。
              </BasicTypography>
              <BasicTypography align="center" component="p" variant="body1">
                メール記載のリンクよりアカウントの作成をお願い致します。
              </BasicTypography>
              <BasicTypography align="center" component="p" variant="body1">
                メールが届いていない場合は、迷惑メールなどをご確認の上、以下のボタンより再送信をお試しください。
              </BasicTypography>
              <div className="h-module-spacer--md" />
              <form onSubmit={handleSubmit}>
                <PrimaryButton text="認証メールを再送信" color="#fff" background="#8bd5da" fullWidth />
              </form>
              <div className="h-module-spacer--md" />
              <StyledNavWrap>
                <Link to="./login">ログイン画面に戻る</Link>
              </StyledNavWrap>
            </>
          )}
        </StyledSpContainer>
      </Container>
    </>
  );
};

export default CompleteSendEmailAuth;

const StyledSpContainer = styled.div`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
const StyledNavWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: #666;
`;
const StyledText = styled.p`
  color: #555;
  line-height: 1.5;
  font-size: 16px;
  overflow-wrap: break-word;
  margin-bottom: 8px;
  text-align: center;
`;

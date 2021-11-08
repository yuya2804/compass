import React, { FC } from "react";
import styled from "styled-components";

import { Container } from "../../molecules/container";
import { OnlyLogoHeader } from "../../organisms/header";
import { Footer } from "../../organisms/footer";

const Terms: FC = () => {
  return (
    <div>
      <OnlyLogoHeader />
      <Container padding="32px 0" align="left">
        <StyledH1>利用規約</StyledH1>
        <StyledText>
          この利用規約（以下、「本規約」といいます。）は、COMPASSの運営者（以下、「当方」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
        </StyledText>

        <StyledH2>第1条（適用）</StyledH2>
        <StyledOrderList>
          <StyledOrderListItem>
            本規約は、ユーザーと当方との間の本サービスの利用に関わる一切の関係に適用されるものとします。
          </StyledOrderListItem>
          <StyledOrderListItem>
            当方は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
          </StyledOrderListItem>
          <StyledOrderListItem>
            本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。
          </StyledOrderListItem>
        </StyledOrderList>

        <StyledH2>第2条（利用登録）</StyledH2>
        <StyledOrderList>
          <StyledOrderListItem>
            本サービスにおいては、登録希望者が本規約に同意の上、当方の定める方法によって利用登録を申請し、当方がこれを承認することによって、利用登録が完了するものとします。
          </StyledOrderListItem>
          <StyledOrderListItem>
            当方は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
            <StyledOrderList>
              <StyledOrderListItem>利用登録の申請に際して虚偽の事項を届け出た場合</StyledOrderListItem>
              <StyledOrderListItem>本規約に違反したことがある者からの申請である場合</StyledOrderListItem>
              <StyledOrderListItem>その他、当方が利用登録を相当でないと判断した場合</StyledOrderListItem>
            </StyledOrderList>
          </StyledOrderListItem>
        </StyledOrderList>

        <StyledH2>第3条（ユーザーIDおよびパスワードの管理）</StyledH2>
        <StyledOrderList>
          <StyledOrderListItem>
            ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
          </StyledOrderListItem>
          <StyledOrderListItem>
            ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。当方は、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。
          </StyledOrderListItem>
          <StyledOrderListItem>
            ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は、当方に故意又は重大な過失がある場合を除き、当方は一切の責任を負わないものとします。
          </StyledOrderListItem>
        </StyledOrderList>

        <StyledH2>第4条（利用料金および支払方法）</StyledH2>
        <StyledOrderList>
          <StyledOrderListItem>
            ユーザーは、本サービスの有料部分の対価として、当方が別途定め、本ウェブサイトに表示する利用料金を、当方が指定する方法により支払うものとします。
          </StyledOrderListItem>
          <StyledOrderListItem>
            ユーザーが利用料金の支払を遅滞した場合には、ユーザーは年14．6％の割合による遅延損害金を支払うものとします。
          </StyledOrderListItem>
        </StyledOrderList>

        <StyledH2>第5条（禁止事項）</StyledH2>
        <StyledText>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</StyledText>
        <StyledOrderList>
          <StyledOrderListItem>法令または公序良俗に違反する行為</StyledOrderListItem>
          <StyledOrderListItem>犯罪行為に関連する行為</StyledOrderListItem>
          <StyledOrderListItem>
            本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為
          </StyledOrderListItem>
          <StyledOrderListItem>
            当方、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
          </StyledOrderListItem>
          <StyledOrderListItem>本サービスによって得られた情報を商業的に利用する行為</StyledOrderListItem>
          <StyledOrderListItem>当方のサービスの運営を妨害するおそれのある行為</StyledOrderListItem>
          <StyledOrderListItem>不正アクセスをし、またはこれを試みる行為</StyledOrderListItem>
          <StyledOrderListItem>他のユーザーに関する個人情報等を収集または蓄積する行為</StyledOrderListItem>
          <StyledOrderListItem>不正な目的を持って本サービスを利用する行為</StyledOrderListItem>
          <StyledOrderListItem>
            本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為
          </StyledOrderListItem>
          <StyledOrderListItem>他のユーザーに成りすます行為</StyledOrderListItem>
          <StyledOrderListItem>当方が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</StyledOrderListItem>
          <StyledOrderListItem>面識のない異性との出会いを目的とした行為</StyledOrderListItem>
          <StyledOrderListItem>
            当方のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
          </StyledOrderListItem>
          <StyledOrderListItem>その他、当方が不適切と判断する行為</StyledOrderListItem>
        </StyledOrderList>

        <StyledH2>第6条（本サービスの提供の停止等）</StyledH2>
        <StyledOrderList>
          <StyledOrderListItem>
            当方は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
            <StyledOrderList>
              <StyledOrderListItem>
                本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
              </StyledOrderListItem>
              <StyledOrderListItem>
                地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
              </StyledOrderListItem>
              <StyledOrderListItem>コンピュータまたは通信回線等が事故により停止した場合</StyledOrderListItem>
              <StyledOrderListItem>その他、当方が本サービスの提供が困難と判断した場合</StyledOrderListItem>
            </StyledOrderList>
          </StyledOrderListItem>
          <StyledOrderListItem>
            当方は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
          </StyledOrderListItem>
        </StyledOrderList>

        <StyledH2>第7条（利用制限および登録抹消）</StyledH2>
        <StyledOrderList>
          <StyledOrderListItem>
            当方は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。
            <StyledOrderList>
              <StyledOrderListItem>本規約のいずれかの条項に違反した場合</StyledOrderListItem>
              <StyledOrderListItem>登録事項に虚偽の事実があることが判明した場合</StyledOrderListItem>
              <StyledOrderListItem>料金等の支払債務の不履行があった場合</StyledOrderListItem>
              <StyledOrderListItem>当方からの連絡に対し、一定期間返答がない場合</StyledOrderListItem>
              <StyledOrderListItem>本サービスについて、最終の利用から一定期間利用がない場合</StyledOrderListItem>
              <StyledOrderListItem>その他、当方が本サービスの利用を適当でないと判断した場合</StyledOrderListItem>
            </StyledOrderList>
          </StyledOrderListItem>
          <StyledOrderListItem>
            当方は、本条に基づき当方が行った行為によりユーザーに生じた損害について、一切の責任を負いません。
          </StyledOrderListItem>
        </StyledOrderList>

        <StyledH2>第8条（退会）</StyledH2>
        <StyledText>ユーザーは、当方の定める退会手続により、本サービスから退会できるものとします。</StyledText>

        <StyledH2>第9条（保証の否認および免責事項）</StyledH2>
        <StyledOrderList>
          <StyledOrderListItem>
            当方は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
          </StyledOrderListItem>
          <StyledOrderListItem>
            当方は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当方とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
          </StyledOrderListItem>
          <StyledOrderListItem>
            前項ただし書に定める場合であっても、当方は、当方の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当方またはユーザーが損害発生につき予見し、または予見し得た場合を含みます。）について一切の責任を負いません。また、当方の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は、ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
          </StyledOrderListItem>
          <StyledOrderListItem>
            当方は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
          </StyledOrderListItem>
        </StyledOrderList>

        <StyledH2>第10条（サービス内容の変更等）</StyledH2>
        <StyledText>
          当方は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
        </StyledText>

        <StyledH2>第11条（利用規約の変更）</StyledH2>
        <StyledText>
          当方は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
        </StyledText>

        <StyledH2>第12条（個人情報の取扱い）</StyledH2>
        <StyledText>
          当方は、本サービスの利用によって取得する個人情報については、当方「プライバシーポリシー」に従い適切に取り扱うものとします。
        </StyledText>

        <StyledH2>第13条（通知または連絡）</StyledH2>
        <StyledText>
          ユーザーと当方との間の通知または連絡は、当方の定める方法によって行うものとします。当方は,ユーザーから,当方が別途定める方式に従った変更届け出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。
        </StyledText>

        <StyledH2>第14条（権利義務の譲渡の禁止）</StyledH2>
        <StyledText>
          ユーザーは、当方の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
        </StyledText>

        <StyledH2>第15条（準拠法・裁判管轄)</StyledH2>
        <StyledOrderList>
          <StyledOrderListItem>本規約の解釈にあたっては、日本法を準拠法とします。</StyledOrderListItem>
          <StyledOrderListItem>
            本サービスに関して紛争が生じた場合には、当方の本店所在地を管轄する裁判所を専属的合意管轄とします。
          </StyledOrderListItem>
        </StyledOrderList>

        <StyledText align="right">以上</StyledText>
      </Container>
      <Footer />
    </div>
  );
};

export default Terms;

type Props = {
  align?: "left" | "center" | "right";
};

const StyledH1 = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
`;
const StyledH2 = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
`;
const StyledText = styled.p<Props>`
  color: #666;
  margin-bottom: 24px;
  text-align: ${(props) => props.align};
`;
const StyledOrderList = styled.ol`
  color: #666;
  list-style-type: decimal;
  padding-left: 32px;
  margin-bottom: 24px;
`;
const StyledOrderListItem = styled.li`
  line-height: 1.5;
`;
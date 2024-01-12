import ContentBox from "@/app/_components/atoms/ContentBox";
import FromInput from "@/app/_components/molecules/FormInput";
import SectionBox from "@/app/_components/atoms/SectionBox";
import ImageAddBox from "@/app/_components/atoms/ImageAddBox";


export default function WriteTemplate() {
  return (
    <>
      <ContentBox>
        <SectionBox>
          <div>
            <FromInput label="상품 이름" maxLength={30} fullWidth/>
          </div>

          <div>
            <ImageAddBox />
          </div>
        </SectionBox>
      </ContentBox>
    </>
  )
}

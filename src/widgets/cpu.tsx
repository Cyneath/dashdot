import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { Switch } from "antd";
import { FC } from "react";
import styled from "styled-components";
import Chart from "../components/chart";
import HardwareInfoContainer from "../components/hardware-info-container";
import ThemedText from "../components/text";

const CpuSwitchContainer = styled.div`
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 2;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

const CpuWidget: FC = () => {
  return (
    <HardwareInfoContainer
      infos={[
        {
          label: "Brand",
          value: "Intel",
        },
        {
          label: "Model",
          value: "i7-8700K",
        },
        {
          label: "Cores",
          value: "8",
        },
        {
          label: "Threads",
          value: "16",
        },
        {
          label: "Frequency",
          value: "3.4 GHz",
        },
        {
          label: "Cache",
          value: "32 MB",
        },
      ]}
      icon={faMicrochip}
      extraContent={
        <CpuSwitchContainer>
          <ThemedText>Show All Cores</ThemedText>
          <Switch defaultChecked={false} onChange={() => {}} />
        </CpuSwitchContainer>
      }
    >
      <Chart />
    </HardwareInfoContainer>
  );
};

export default CpuWidget;
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { productRoutes } from "..";
import { getProductByMainProductAndFeature } from "../../../Services/ProductServices";
import { Colors } from "../../../Styles/Styles";
import { SelectedFeatureDto } from "../Product";

type compProps = {
  feature: SelectedFeatureDto;
  selectedFeatures: Array<SelectedFeatureDto>;
  setSelectedFeatures: React.Dispatch<
    React.SetStateAction<SelectedFeatureDto[]>
  >;
  mainProductId: string;
};

const SelectFeatureComponent = ({
  feature,
  selectedFeatures,
  setSelectedFeatures,
  mainProductId,
}: compProps) => {
  const navigate = useNavigate();

  const handleOnClickFeature = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(selectedFeatures);
    const indexOfFeature = selectedFeatures
      .map((ft) => ft.featureTypeId)
      .indexOf(feature.featureTypeId);

    var newArray: Array<SelectedFeatureDto> = [...selectedFeatures];

    newArray.splice(indexOfFeature, 1, feature);
    setSelectedFeatures([...newArray]);
    getProductByMainProductAndFeature({
      mainProductId,
      featureIdList: newArray.map((ft) => ft.id),
    })
      .then((res) => {
        navigate(`/product/${res.data.id}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Button
      style={{
        background:
          selectedFeatures.filter((sft) => sft.id === feature.id).length > 0
            ? Colors.border
            : "white",
        padding: 0.7,
        borderRadius: 2,
        color: "black",
      }}
      key={feature.id}
      id={feature.id}
      onClick={(e) => handleOnClickFeature(e)}
    >
      {feature.name}
    </Button>
  );
};
export default SelectFeatureComponent;

import html2canvas from "html2canvas";
import React, { useRef } from "react";
import Extras from "../../components/Extras/Extras";
import { Menu } from "../../components/Menu/Menu";
import TrainedSkills from "../../components/TrainedSkills/TrainedSkills";
import { changes } from "../../constants";
import "./styles.css";

export function Helper(props) {
  const tabImage = useRef();
  const tabTutorial = useRef();
  const tabImageBox = useRef();

  return (
    <div className="HelperApp">
      <div className="Helper">
        <button
          className="Tutorial"
          onClick={() => {
            tabTutorial.current.style.display = "block";
          }}
        >
          Tutorial
        </button>
        <Menu name="Imagem">
          <button
            onClick={() => {
              tabImageBox.current.style.display = "block";
              tabImage.current.value = "";
            }}
          >
            Adicionar Foto
          </button>
          <button
            onClick={() => {
              props.setImage("");
            }}
          >
            Remover Foto
          </button>
          <div ref={tabImageBox} className="Helper-Image">
            <div className="Helper-ImageBox">
              <div>Link</div>
              <input
                ref={tabImage}
                type="text"
                placeholder="https://imagem.png"
              />
              <button
                onClick={() => {
                  props.setImage(tabImage.current.value);
                  tabImageBox.current.style.display = "none";
                }}
              >
                Confirmar
              </button>
              <button
                onClick={() => (tabImageBox.current.style.display = "none")}
              >
                Cancelar
              </button>
            </div>
          </div>
        </Menu>
        <Menu name="Pericias">
          <div className="Helper-Skills">
            {props.pericias.map((e, i) => {
              if (e.name === null) {
                return null;
              } else {
                return (
                  <TrainedSkills
                    name={e.name}
                    pericias={props.pericias}
                    key={e.name + i}
                    setPericias={props.setPericias}
                  />
                );
              }
            })}
          </div>
        </Menu>
        <Menu name="Extras">
          <div className="Helper-Extras">
            {props.extras.map((e, i) => (
              <Extras
                name={e.name}
                key={e.name + i}
                extras={props.extras}
                setExtras={props.setExtras}
                number={e.number}
                checked={e.marked}
                index={i}
              />
            ))}
          </div>
        </Menu>
        <Menu name="Mudanças">
          <div>
            {changes.map((e) => {
              if (e.valor === 2) {
                return null;
              } else
                return (
                  <div key={e}>
                    {e.name}: {e.valor}
                  </div>
                );
            })}
          </div>
        </Menu>
        <Menu name="Gerar Ficha">
          <div className="Npc-Helper">
            <button
              onClick={() => {
                html2canvas(document.getElementById("MonsterCreator"), {
                  allowTaint: true,
                }).then(function (canvas) {
                  let html = window.open("", "Imagem de Ficha");
                  html.document.body.appendChild(canvas);
                });
              }}
            >
              Criar Png
            </button>
          </div>
        </Menu>
      </div>
    </div>
  );
}

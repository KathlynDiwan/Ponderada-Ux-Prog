import { Component, OnInit } from '@angular/core';
import { TitlePageComponent } from '../../title-page/title-page.component';
import { TitleSectionComponent } from '../../title-section/title-section.component';
import { HeaderComponent } from '../../header/header.component';
import { TableComponent } from '../../table/table.component';
import { SectionTwoComponent } from '../../section-two/section-two.component';
import { SectionOneComponent } from '../../section-one/section-one.component';
import { SectionThreeComponent } from '../../section-three/section-three.component';
import { SectionFourComponent } from '../../section-four/section-four.component';
import { BarChartComponent } from '../../charts/bar-chart/bar-chart.component';
import { ColumnChartComponent } from '../../charts/column-chart/column-chart.component';
import { LineChartComponent } from '../../charts/line-chart/line-chart.component';
import { KpiCultureComponent } from '../../kpi-culture/kpi-culture.component';
import { KpiNoteComponent } from '../../kpi-note/kpi-note.component';
import { EnpsScoreComponent } from '../../enps-score/enps-score.component';
import { KpiResponseComponent } from '../../kpi-response/kpi-response.component';
import { CidfComponent } from "../../filters/cidf/cidf.component";
import { FiltersAspectComponent } from "../../filters/filters-aspect/filters-aspect.component";
import { SaudeService } from '../../../services/saude.service';
import { GptwService } from '../../../services/gptw.service';
import { StibaService } from '../../../services/stiba.service';

interface ScoreGPTW {
  averageScoreGeneral: number
}

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [TitlePageComponent, TitleSectionComponent, HeaderComponent, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, SectionFourComponent, TableComponent, ColumnChartComponent, LineChartComponent, KpiCultureComponent, KpiNoteComponent, EnpsScoreComponent, KpiResponseComponent, CidfComponent, FiltersAspectComponent]
})
export class HomeComponent implements OnInit {
    //Componente: Respondentes
    respondentPercentage: number | null = null;

    //Componente: Nota média das dimensões
    scoreGPTW: number = 0;
    changePercentMonth: number = 0;

    // Tabela: 5 questões com notas mais altas - Stiba
    topFiveQuestions: any[] = [];

    // Tabela: 5 questões com notas mais baixas - Stiba
    bottomFiveQuestions: any[] = [];

    // Gráfico: Quantidade de atestados por mês
    categoriesAggregateDdays: number[] = [];
    seriesDataAggregateDdays: number[] = [];

    // Gráfico: Média de dias abonados por mês
    categoriesMonthlyAveragesDays: string[] = [];
    seriesMonthlyAveragesDays: number[] = [];

    // Tabela: 5 principais doenças e problemas da área
    diseaseTop: any[] = [];

    // Tabela: 5 principais causas das doenças e problemas
    diseasesCauses: any[] = [];

    // Gráfico: 5 principais cargos afetados
    categories: string[] = [];
    seriesData: number[] = [];

    // Nova propriedade para o controle do tamanho da fonte
    fontSize: number = 16;

    constructor(private saudeService: SaudeService, private gptwService: GptwService, private stibaService: StibaService) {}

    ngOnInit(): void {
        // Lógica de inicialização como antes...
    }

    // Métodos para aumentar e diminuir o tamanho da fonte
    increaseFontSize() {
        this.fontSize++;
    }

    decreaseFontSize() {
        this.fontSize--;
    }
}

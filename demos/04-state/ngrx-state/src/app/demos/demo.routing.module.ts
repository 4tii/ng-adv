import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { AppStateComponent } from './samples/app-state/app-state.component';
import { DemoListHostComponent } from './samples/demos-list/demo-list-host..component';
import { DemosStateComponent } from './samples/demos-state/demos-state.component';
import { EventbusComponent } from './samples/eventbus/eventbus.component';
import { SelectorsComponent } from './samples/selectors/selectors.component';
import { SkillsComponent } from './samples/skills/skills.component';
import { EffectsComponent } from './samples/effects/effects.component';
import { FacadesComponent } from './samples/facades/facades.component';
import { StatefullComponent } from './samples/statefull/statefull.component';
import { ChangeDetectionComponent } from './samples/change-detection/change-detection.component';
import { ContainerPresenterNgrxComponent } from './samples/container-presenter-ngrx/container-presenter-ngrx.component';
import { ChangeDetectorRefComponent } from './samples/change-detector-ref/change-detector-ref.component';
import { ChangeDetectionProfileComponent } from './samples/change-detection-profile/change-detection-profile.component';
import { ComponentStoreComponent } from './samples/component-store/component-store.component';

export const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'demos-state', component: DemosStateComponent },
      { path: 'demos-list', component: DemoListHostComponent },
      { path: 'app-state', component: AppStateComponent },
      { path: 'selectors', component: SelectorsComponent },
      { path: 'effects', component: EffectsComponent },
      { path: 'facades', component: FacadesComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'cd-intro', component: ChangeDetectionComponent },
      { path: 'cd-profile', component: ChangeDetectionProfileComponent },
      { path: 'component-store', component: ComponentStoreComponent },
      { path: 'presenter-ngrx', component: ContainerPresenterNgrxComponent },
      {
        path: 'change-detector-ref',
        component: ChangeDetectorRefComponent,
      },
    ],
  },
];

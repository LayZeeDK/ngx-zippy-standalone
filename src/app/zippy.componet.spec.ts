import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ZippyComponent } from './zippy.component';

@Component({
  imports: [ZippyComponent],
  standalone: true,
  template: `
    <app-zippy label="Click me">
      <span id="projected-content">Projected content</span>
    </app-zippy>
  `,
})
class TestHostComponent {}

function setup() {
  const hostFixture = TestBed.createComponent(TestHostComponent);
  hostFixture.autoDetectChanges(true);
  const queryHiddenParent = () =>
    projectedContent.nativeElement.closest('[hidden]');
  const projectedContent = hostFixture.debugElement.query(
    By.css('#projected-content')
  );

  return {
    expectContentToBeHidden(): void {
      expect(queryHiddenParent()).not.toBeNull();
    },
    expectContentToBeVisible(): void {
      expect(queryHiddenParent()).toBeNull();
    },
    clickButton(): void {
      const button = hostFixture.debugElement.query(By.css('button'));
      button.triggerEventHandler('click', { button: 0 });
      hostFixture.detectChanges();
    },
  };
}

describe(ZippyComponent.name, () => {
  it(`
  Given projected content
  Then the content is hidden`, () => {
    const { expectContentToBeHidden } = setup();

    expectContentToBeHidden();
  });

  it(`
  Given projected content
  When the button is clicked once
  Then the content is visible`, () => {
    const { clickButton, expectContentToBeVisible } = setup();

    clickButton();

    expectContentToBeVisible();
  });

  it(`
  Given projected content
  When the button is clicked twice
  Then the content is hidden`, () => {
    const { clickButton, expectContentToBeHidden } = setup();

    clickButton();
    clickButton();

    expectContentToBeHidden();
  });

  it(`
  Given projected content
  When the button is clicked thrice
  Then the content is visible`, () => {
    const { clickButton, expectContentToBeVisible } = setup();

    clickButton();
    clickButton();
    clickButton();

    expectContentToBeVisible();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';
import { vi } from 'vitest';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{
        provide: AppService,
        useValue: {
          getHello: vi.fn().mockReturnValue('Hello World!')
        }
      }],
    }).compile();

    appService = app.get<AppService>(AppService);
    appController = new AppController(appService);  // Manually instantiate with dependency
  });

  describe('getHello', () => {
    it('should return hello message', () => {
        const expectedResult = 'Hello World!';
        const result = appController.getHello();

        expect(result).toBe(expectedResult);
        expect(appService.getHello).toHaveBeenCalled();
    });
  });
});
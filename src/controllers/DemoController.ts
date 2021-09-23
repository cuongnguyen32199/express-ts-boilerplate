import { JsonController, Post, Get, Body, Param, Patch } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { DemoService } from '../services/DemoService';
import { DemoDTO } from '../dtos/DemoDTO';

@JsonController('/demo')
@OpenAPI({ security: [{ access_token: [] }] })
export class DemoController {
  constructor(private demoService: DemoService) {}

  @Get('/:name')
  public async getByName(@Param('name') name: string) {
    return this.demoService.getByName(name);
  }

  @Post('/')
  public async create(@Body() body: DemoDTO) {
    return this.demoService.create(body.name, body.type);
  }

  @Patch('/:id')
  public async update(@Param('id') id: string, @Body() body: DemoDTO) {
    return this.demoService.update(id, body.name, body.type);
  }
}

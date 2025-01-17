import {Component, inject, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RoomService} from "../../room/room.service";
import {WorkService} from "../work.service";
import {WorkTypeService} from "../../work-type/work-type.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-work-dialog',
  templateUrl: './work-dialog.component.html',
  styles: ``
})
export class WorkDialogComponent implements OnInit {
  workForm: FormGroup;
  rooms: any;
  status: any;
  workTypes: any;
  roomService = inject(RoomService);
  workService = inject(WorkService);
  workTypeService = inject(WorkTypeService);

  constructor(public dialogRef: MatDialogRef<WorkDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder) {
    this.workForm = this.fb.group({
      description: [data.description],
      estMaterialCost: [data.estMaterialCost],
      estLaborCost: [data.estLaborCost],
      finalMaterialCost: [data.finalMaterialCost],
      finalLaborCost: [data.finalLaborCost],
      state: [data.state, Validators.required],
      paid: [data.paid],
      startDate: [data.startDate],
      endDate: [data.endDate],
      room: [data.room, Validators.required],
      workType: [data.workType, Validators.required]
    });

  }

  onSubmit() {
    if (this.workForm.valid) {
      this.dialogRef.close(this.workForm.value);
    }
  }

  ngOnInit() {
    this.roomService.getAllRooms().subscribe({
      next: (data) => this.rooms = data,
      error: (err) => console.error(err)
    });

    this.workService.getEnumWorkStatus().subscribe({
      next: (data) => this.status = data,
      error: (err) => console.error(err)
    });

    this.workTypeService.getAllTypes().subscribe({
      next: (data) => this.workTypes = data,
      error: (err) => console.error(err)
    });
  }

  /**
   * Compares two objects by their ID property
   * Used by mat-select to properly compare objects for selection
   * @param obj1 - First object to compare
   * @param obj2 - Second object to compare
   * @returns boolean indicating if the objects have the same ID
   */
  compareById(obj1: any, obj2: any): boolean {
    return obj1 && obj2 && obj1.id === obj2.id;
  }


}

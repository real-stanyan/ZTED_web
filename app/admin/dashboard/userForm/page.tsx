"use client";

import * as React from "react";
import { useState, useEffect, useCallback } from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";

import { getUserList, deleteUser } from "@/services/user";

import useAdmin from "@/stores/useAdmin";

//表单格式
// export type RegisterForm = {
//   id: string;
//   companyName: string;
//   name: string;
//   email: string;
//   position: string;
//   annualRevenue: string;
//   classType: string;
//   user?: string;
// };

export type UserList = {
  name: string;
  email: string;
  phoneNum: string;
  lastActivityTime: string;
};

export default function UserList() {
  const { toast } = useToast();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const adminEmail = useAdmin((state) => state.admin.email);

  console.log(adminEmail);

  //展示row数据格式
  const columns: ColumnDef<UserList>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    // 客户姓名
    {
      accessorKey: "name",
      header: "客户姓名",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("name") || "暂无数据"}</div>
      ),
    },
    // 客户邮箱
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            客户邮箱
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("email") || "暂无数据"}</div>
      ),
    },
    // 客户手机号
    {
      accessorKey: "phoneNum",
      header: "客户手机号",
      cell: ({ row }) => (
        <div className="lowercase">
          {row.getValue("phoneNum") || "暂无数据"}
        </div>
      ),
    },
    // 客户上次活动时间
    {
      accessorKey: "lastActivityTime",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            上次活动时间
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">
          {row.getValue("lastActivityTime") || "暂无数据"}
        </div>
      ),
    },
    // actions
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const userList = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => handleDelete(userList.email)}>
                删除该条数据
              </DropdownMenuItem>
              {/* <DropdownMenuSeparator /> */}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  // 处理删除数据
  const handleDelete = async (userEmail: string) => {
    console.log(adminEmail);

    const res = await deleteUser(userEmail, adminEmail);
    setData((currentData) =>
      currentData.filter((item) => item.email !== userEmail)
    );
    console.log(res);
    // 204: “删除成功”
    if (res.status === 204) {
      toast({
        title: "删除成功",
        description: "该条数据已经删除",
      });
    }
    // 404: "删除失败，未找到"
    if (res.status === 404) {
      toast({
        variant: "destructive",
        title: "删除失败",
        description: "未找到，无返回",
      });
    }
    // 400: "删除失败，权限不够"
    if (res.status === 400) {
      toast({
        variant: "destructive",
        title: "删除失败",
        description: "权限不够",
      });
    }
  };

  // useState表单数据
  const [data, setData] = useState<UserList[]>([
    {
      name: "test",
      email: "test",
      phoneNum: "test",
      lastActivityTime: "test",
    },
  ]);

  useEffect(() => {
    async function fetchData(adminEmail: string) {
      const data = await getUserList(adminEmail);
      const array: UserList[] = Object.values(data)
        .filter(
          (item): item is UserList => typeof item === "object" && item !== null
        )
        .map((item: any) => ({
          ...item,
        }));

      console.log(array);

      setData(array);
    }
    fetchData(adminEmail);
  }, []);

  console.log(data);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-[90%] mx-auto my-[2vw]">
      <h1 className="text-[4vw] text-center">会员名单</h1>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto p-4">
              选项 <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())

              .map((column) => {
                console.log(column.id);

                let TansName;
                switch (column.id) {
                  case "name":
                    TansName = "姓名";
                    break;
                  case "email":
                    TansName = "邮箱";
                    break;
                  case "phoneNum":
                    TansName = "手机号";
                    break;
                  case "lastActivityTime":
                    TansName = "上次活动时间";
                    break;

                  // 更多的cases
                  default:
                    TansName = "DefaultName";
                }
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {TansName}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

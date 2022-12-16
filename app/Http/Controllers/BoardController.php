<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StoreBoardRequest;
use App\Http\Requests\UpdateBoardRequest;
use Exception;
use App\Models\Board;

class BoardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return Board::orderBy('id', 'desc')->get();
        } catch (Exception $err) {
            return response()->json([
                'message' => 'board data load failed'
            ], 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $inputData = $request->all();

        try {
            $newBoard = Board::create($inputData);

            if ($newBoard) {
                return response()->json([
                    'error' => 0,
                    'message' => 'register success'
                ]);
            }
            
        } catch (Exception $err) {
            return response()->json([
                'message' => 'Internal Server Error'
            ], 500);
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int $idx
     * @return \Illuminate\Http\Response
     */
    public function show($idx)
    {
        try {
            if(Board::where('id', $idx)->exists()) {
                return Board::find($idx);
            } else {
                return response()->json([
                    'message' => 'cannot find data'
                ], 404);
            }
        } catch (Exception $err) {
            return response()->json([
                "message" => 'Internal Sever error'
            ], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Board  $Board
     * @return \Illuminate\Http\Response
     */
    public function edit(Board $Board)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int $idx
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $idx)
    {
        try {
            if(Board::where('id', $idx)->exists()) {
                $fetchedData = Board::find($idx);
                $inputData = $request->all();
                $updateBoard = $fetchedData->update($inputData);

                return response()->json([
                    'error' => 0,
                    'updated' => $updateBoard
                ]);
            } else {
                return response()->json([
                    'message'=> 'cannot find data'
                ], 404);
            }
        } catch (Exception $err) {
            return response()->json([
                'message' => 'Internal Server Error'
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $idx
     * @return \Illuminate\Http\Response
     */
    public function destroy($idx)
    {
        try {
            if (Board::where('id', $idx)->exists()) {
                $deleteBoard = Board::find($idx)->delete();

                return response()->json([
                    'error' => 0,
                    'deleted' => $deleteBoard
                ]);
            } else {
                return response()->json([
                    'message' => 'cannot find data'
                ], 404);
            }
        } catch (Exception $err) {
            return response()->json([
                'message' => 'Internal Server Error'
            ], 500);
        }
    }
}
